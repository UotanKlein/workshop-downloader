import { exec } from 'child_process';
import path from 'path';
import fsp from 'fs/promises';
import { isDir, isFile, checkExists } from './fileSystem.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const curPath = path.resolve(__dirname, '..');
const gmadPath = path.join(curPath, 'decompilers/gmad.exe');

const gmod = async (dirPath) => {
    if (!(await checkExists(gmadPath)) || !(await isFile(gmadPath))) return;
    if (!(await checkExists(dirPath)) || !(await isDir(dirPath))) return;

    const dirContent = await fsp.readdir(dirPath);
    const gmaFiles = dirContent.filter((el) => path.extname(el) === '.gma');

    await Promise.all(
        gmaFiles.map(async (el) => {
            try {
                const gmaFilePath = path.join(dirPath, el);
                exec(
                    `wine ${gmadPath} extract -file "${gmaFilePath}"`,
                    async (err, stdout, stderr) => {
                        if (err) {
                            console.error(
                                `Процесс декомпиляции для файла ${el} завершился с ошибкой: ${err}`,
                            );
                            return;
                        }

                        try {
                            await fsp.unlink(gmaFilePath);
                        } catch (err) {
                            console.error(
                                `Не удалось удалить файл ${gmaFilePath}: ${err}`,
                            );
                        }

                        console.log(
                            `Декомпиляция для файла ${el} прошла успешно`,
                        );
                    },
                );
            } catch (err) {
                console.error(
                    `Процесс декомпиляции для файла ${el} завершился с ошибкой: ${err}`,
                );
            }
        }),
    );

    console.log('Все файлы были декомпилированы успешно');
};

export { gmod };
