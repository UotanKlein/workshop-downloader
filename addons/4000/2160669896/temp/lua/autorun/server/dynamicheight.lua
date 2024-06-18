AddCSLuaFile("../client/options.lua")

local cvarHeightEnabled = CreateConVar("sv_dynamicheight", "1", {FCVAR_SERVER_CAN_EXECUTE, FCVAR_ARCHIVE, FCVAR_REPLICATED})
local cvarHeightMaxManual = CreateConVar("sv_dynamicheight_max_manual", "0", {FCVAR_SERVER_CAN_EXECUTE, FCVAR_ARCHIVE, FCVAR_REPLICATED})
local cvarHeightMinManual = CreateConVar("sv_dynamicheight_min_manual", "0", {FCVAR_SERVER_CAN_EXECUTE, FCVAR_ARCHIVE, FCVAR_REPLICATED})
local cvarHeightMin = CreateConVar("sv_dynamicheight_min", "16", {FCVAR_SERVER_CAN_EXECUTE, FCVAR_ARCHIVE})
local cvarHeightMax = CreateConVar("sv_dynamicheight_max", "64", {FCVAR_SERVER_CAN_EXECUTE, FCVAR_ARCHIVE})

local function UpdateView(ply)
  if cvarHeightEnabled:GetBool() then
    -- Find the max and min height by spawning a dummy entity
    local height_max = 64
	local height_min = 16
	
	
	-- Finds model's height
    local entity = ents.Create("base_anim")
	local entity2 = ents.Create("base_anim")
	
    entity:SetModel(ply:GetModel())
    entity:ResetSequence(entity:LookupSequence("idle_all_01"))
    local bone = entity:LookupBone("ValveBiped.Bip01_Neck1")
    if bone then
      height_max = entity:GetBonePosition(bone).z + 5
	end
	
	-- Finds model's crouch height
	entity2:SetModel(ply:GetModel())
    entity2:ResetSequence(entity2:LookupSequence("cidle_all"))
    local bone2 = entity2:LookupBone("ValveBiped.Bip01_Neck1")
    if bone2 then
      height_min = entity2:GetBonePosition(bone2).z + 5
	end
	
	-- Removes test entities
    entity:Remove()
	entity2:Remove()
	

    -- Update player height
	local min = cvarHeightMin:GetInt()
    local max = cvarHeightMax:GetInt()
	
	--[[
	local min = 16
    local max = 64
	
	if cvarHeightMinManual:GetBool() then
		min = cvarHeightMin:GetInt()
	end
	
	if cvarHeightMaxManual:GetBool() then
		max = cvarHeightMax:GetInt()
	end
	]]--
	
	--[[
    ply:SetViewOffset(Vector(0, 0, height_max))
    ply:SetViewOffsetDucked(Vector(0, 0, height_min))
    ply.ec_ViewChanged = true
	]]--
	
	if cvarHeightMinManual:GetBool() then
		ply:SetViewOffsetDucked(Vector(0, 0, min))
		else
			ply:SetViewOffsetDucked(Vector(0, 0, height_min))
	end
	
	if cvarHeightMaxManual:GetBool() then
		ply:SetViewOffset(Vector(0, 0, max))
		else
			ply:SetViewOffset(Vector(0, 0, height_max))
	end	
	
	
  else
    if ply.ec_ViewChanged then
      ply:SetViewOffset(Vector(0, 0, 64))
      ply:SetViewOffsetDucked(Vector(0, 0, 28))
      ply.ec_ViewChanged = nil
    end
  end
end

local function UpdateTrueModel(ply)
  if ply:GetNWString("dynamicheight:TrueModel") ~= ply:GetModel() then
    ply:SetNWString("dynamicheight:TrueModel", ply:GetModel())
    UpdateView(ply)
  end
end

hook.Add("PlayerSpawn", "dynamicheight:PlayerSpawn", function(ply)
  UpdateTrueModel(ply)
end)

hook.Add("PlayerTick", "dynamicheight:PlayerTick", function(ply)
  UpdateTrueModel(ply)
end)

local function ConVarChanged(name, oldVal, newVal)
  for _, ply in pairs(player.GetAll()) do
    UpdateView(ply)
  end
end

cvars.AddChangeCallback("sv_dynamicheight", ConVarChanged)
cvars.AddChangeCallback("sv_dynamicheight_min", ConVarChanged)
cvars.AddChangeCallback("sv_dynamicheight_max", ConVarChanged)
