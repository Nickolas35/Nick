// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010102020204050202020202020202020202020101010101010101010101010101010201010101010101010101010101010102020202010602020202020202020202020101020102010101010101010102010202010201020101010101010101020101020102010201010101010101010202010201020102010402020201010101020102010201020101010102020202020201020102010202060101010101010101010201020101010202020202020206010102010201010101010101010101020101040102010101010101010101010201010101020202020202020202020202010101010203010101010101010101010104020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
2 . . . . . . . . . . . . 2 2 . 
2 . 2 2 2 2 2 2 2 2 . 2 . . 2 . 
2 . 2 2 2 2 2 2 2 2 . 2 2 . 2 . 
2 . 2 2 2 2 2 2 2 2 . . 2 . 2 . 
2 . 2 . . . . 2 2 2 2 . 2 . 2 . 
2 . 2 2 2 2 . . . . . . 2 . 2 . 
2 . . . 2 2 2 2 2 2 2 2 2 . 2 . 
2 2 2 . . . . . . . . 2 2 . 2 . 
2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 . 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
. . . . . . . . . . . 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.castle.shrub,sprites.castle.rock1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
