-- Options Menu
hook.Add("PopulateToolMenu", "DynamicHeight:PopulateToolMenu", function()
  spawnmenu.AddToolMenuOption("Options", "Dynamic Height", "DynamicHeight", "Owner Options Only", "", "", function(panel)
    panel:AddControl("CheckBox", {
      Label = "Enable Dynamic Height (Default 1/On)",
      Command = "sv_dynamicheight",
    })
	
	panel:AddControl("CheckBox", {
      Label = "Manual Max Height (Default 0/Off)",
      Command = "sv_dynamicheight_max_manual",
    })
	
	panel:AddControl("Slider", {
      Label = "Height Max (Default 64)",
      Command = "sv_dynamicheight_max",
      Min = 5,
      Max = 180,
    })
	
	panel:AddControl("CheckBox", {
      Label = "Manual Min Height (Default 0/Off)",
      Command = "sv_dynamicheight_min_manual",
    })
	
	panel:AddControl("Slider", {
      Label = "Height Min (Default 16)",
      Command = "sv_dynamicheight_min",
      Min = 5,
      Max = 180,
    })
  end)
end)