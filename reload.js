On = importNamespace("On");
var disableHook = false;
var enableHotReload = false; // set to true to enable
On.GameManager.add_Update((orig,self)=>{
    orig(self);
    if(enableHotReload){
        if(!disableHook && Input.GetKeyDown(KeyCode.P)){
            disableHook = true;
            Modding.ModLoader.ModInstanceNameMap["ModScript"].Mod.Initialize();
        }
    }
})