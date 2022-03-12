CK = importNamespace("CustomKnight");

var max_skins = 10; // keep lower than CK cache limit (set in global settings)

var skins,scenes;

var preload = ()=>{
    //preload into CK cache to allow fast transitions
    for(var i = 0; i < max_skins; i++ ){
        CK.SkinManager.SetSkinById(skins[i].GetId());
    }
}
var sceneHook = (from,to)=>{
    if(disableHook){return;}
    scenes++;
    if(GameManager.instance.IsNonGameplayScene()){ scenes = 0;}
    if(scenes < 2 || GameManager.instance.IsNonGameplayScene() || !to || !from) {return;}

    var j = Math.floor(Math.random() * max_skins)
    CK.SkinManager.SetSkinById(skins[j].GetId());
}

var onReady = ()=>{ 
    skins = CK.SkinManager.GetInstalledSkins();
    scenes = 0;
    UnityEngine.SceneManagement.SceneManager.add_activeSceneChanged(sceneHook);
}

CK.CustomKnight.add_OnReady(onReady);