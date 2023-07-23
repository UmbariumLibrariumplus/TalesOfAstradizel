/*:

@plugindesc ♦6.0.3♦ Create highly customized minimaps!
@author Hakuen Studio

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
============================================================================
Features
============================================================================

● Create mini-maps from images or drawings!
● Highly customizable selection of colors for drawing the minimap: 
● Region Id, Terrain tags, Passable/Impassable, Ladder, Bush, Counter, 
and Damage Floor!
● Use icons to represent characters on minimap!
● Change icon zoom, hue, and much more!
● Hide/Show the minimap with a switch.
● Overlay image above the minimap! (PRO)
● Use sprites to represent characters on minimap! (PRO)
● Set 5 different shapes for mini-maps! (PRO)
● Put a mini-map inside a window! (PRO)
● See a full mini-map on a different scene! (PRO)
● Create marker templates for quick use in events/actors! (PRO)
● Add a noise filter to the minimap! (PRO)
● Play common event when clicking/touch minimap (PRO)

============================================================================
Google docs help file
============================================================================

https://docs.google.com/document/d/1eU_ZeuljVSNzyRsVPSr-z6HwN8ZSrdF9Gm5oQHHT34c/edit?usp=sharing

============================================================================
Plugin Parameters
============================================================================

♦ Minimap (Scene Map) ♦

● Hide Switch → If this switch is ON, it will hide the minimap.
● Click/Touch CE → Select a common event to play when clicking/touching 
the minimap.

● Mask → The mask is the area that will show the minimap. So no matter how 
big is your minimap, it will only be shown on the mask area you defined.
• Shape → You can choose to define this area in many ways: Rectangle, 
Circle, Rounded Rectangle, Star, or an image.

● Window → Optionally, you can decide to show the minimap inside a window 
and adjust some settings for it.

● Background → That background will be drawn below the minimap. Or between 
the minimap and the window, in case you choose to use a window. Leave 
the opacity 0 if you do not want to use it.

● Position → The minimap position on the screen. It will auto calculate 
the position according to the Align parameters. But you can also add an 
offset value to that position.

● Noise Filter → You can optionally set a noise filter on the minimap.
• Layer → If perhaps you are using the window container for the minimap, 
you can choose if you want the noise filter to apply all over the window
and on the minimap or just on the minimap.
• Intensity → The noise intensity should be a normalized value in the 
range 0 - 1. You can use decimals. Alternatively, you can set “random” 
and the plugin will choose a random value for it.
• Seed → The seed should be a normalized value in the range 0 - 1. You 
can use decimals. Alternatively, you can set “random” and the plugin 
will choose a random value for it.
• Dynamic Seed → If this is true, the seed will keep changing randomly 
while the minimap is opened.
• Seed timer → If Dynamic Seed is true, this will determine the time, 
in frames, that the seed will change.

● Overlay Image → This is an optional image for you to load, that will 
be above the minimap. You can use it to create a border, or just a 
“watermark” or something like that.
● Opacity → The opacity of the minimap.

♦ Full Minimap (Scene Minimap) ♦ 

This parameter is used for a custom scene exclusively for your minimap. 
Currently, is just a way for you to see all your minimap. This means 
that you can open a bigger version of your minimap and scroll to see 
all the map areas.

● Scene Background → Let you set a background image exclusively for the 
minimap scene.

● Camera → On the full minimap scene, you don’t have the player 
character move the minimap camera. So here you can set up the camera 
movement speed. It works like a character moving the map.
• Move Speed → How fast the camera will move.
• Dash Speed → How much speed will be added to the movement speed 
when “shift” is being pressed. So if you are pressing shift while 
moving the camera, it can move faster.

The rest of the parameters are equal to the Scene Map minimap. With the 
exception that it does not have the switch and common event parameter.

♦ Common Settings ♦

These are settings that are applied to both the Scene Map minimap and the 
Scene Minimap.

● Tilesize → By default it is 12. Try to only set pair numbers. It will 
draw the minimap like it has a tile size of 12.
● Scroll Limit → If set to true, the minimap will stop scrolling together 
with the default map. If false, then the minimap will keep scrolling as 
long as the player can move.
● Tileset Colors → If you choose to use the drawn minimap instead of an 
image, you can customize the colors the plugin will use to paint your 
minimap according to the characteristics of each tile. Each property of 
the tile has a priority. The plugin will always choose the highest 
priority property. This means it will look for the colors in this order:

Priority 1
● Region Colors → Define a color for a region id.

Priority 2
● Terrain Colors → Define a color for a terrain tag.

Priority 3
● Ladder, Bush, Counter, Damage → You can define a color for each of them.

Priority 4
● Passable/Impassable → You can define a different color for both.

♦ Minimap Markers ♦

Here you will define some settings for the minimap markers. They can 
either be an Icon or a Map sprite!

● Icon Image → Optionally, you can choose to use another iconset image 
than the default one.
● Size → The general size of the icon.

● Icon Templates → You can optionally build some icon markers templates 
for quick use on Actor note tags, Event notes, and Event comments.
• Name → The name of the template. It is not case sensitive, but it can’t 
have spaces. This is what you will use to reference on the Actor Note 
Tags and events.
• Icon Index → The icon to be used for that template.
• Hue → You can change the hue of the icon.
• Zoom → You can change the zoom of the icon. Can use decimals, like 0.5.
• Sync Transparency → If true, the icon on the minimap will also be 
transparent when its character is transparent.
• Sync Direction → If true, the icon will rotate according to its 
character direction.
• Blink Duration → Optionally, if you set this value above 1, it will 
make the marker on the minimap blink.
• Minimum Opacity → If the Blink Duration is above 1, the opacity of 
the marker will be changing from the minimum opacity value to 255.

● Sprite Templates → Similar to icon templates, but it works by showing 
the actual map sprite of the character on the minimap. It does not have 
Hue and Icon index options. But it has a new parameter:
• Sync Step Animation → If true, it will sync the marker step animation 
with its character.

NOTE¹: The only way to create markers for vehicles is through templates. 
You can choose one of the vehicle types or write another name in case 
you are using any custom vehicle.

============================================================================
How to use
============================================================================

First, create a folder called "minimap" on your img folder. 
It is case-sensitive.

============================================================================
Creating Minimaps with Note tags
============================================================================

To create a minimap you can use the note tags on the map note fields:

● <TileMinimap>
● <ImgMinimap: myImageName> (It will look for that image inside the 
minimap folder)

You can generate this image with the editor option to save a map png.
They are case-sensitive. Don't use spaces on the minimap image.

============================================================================
Creating Minimap Markers
============================================================================

You can optionally create minimap markers to represent the map characters 
on the minimap. They can be either a Map Sprite or an Icon.
There are two note tags to make that happen:

● <MMIcon: Icon index, zoom, Hue, Sync Direction, Sync Transparency, 
BlinkDuration, MinOpacity>

• Icon index → Mandatory.
• Zoom → Default is 0.5.
• Hue → Default is 0.
• Sync Direction → Default is false.
• Sync Transparency → Default is true.
• Blink Duration → Default is 1
• Min Opacity → Default is 255

Example: <MMIcon: 74, 0.5, 0, true, true, 30, 120>

● <MMSprite: zoom, Sync Step Animation, Sync Direction, Sync Transparency, 
BlinkDuration, MinOpacity>

• Zoom → Default is 0.5.
• Sync Step Animation → Default is true.
• Sync Direction → Default is true.
• Sync Transparency → Default is true.
• Blink Duration → Default is 1
• Min Opacity → Default is 255

Example: <MMSprite: 0.5, false, true, true, 1, 255>

Fill that the same way you fill them on the plugin parameters.

So, for actors, you create a marker by putting one of these note tags on 
the actor note field.
For events, you can create them by either applying them to the note field 
or as a comment. The comment way has priority over the note field.

Alternatively, instead of drawing the note tags, you can just use a 
template by referencing its name on the first note tag argument:

<MMIcon: Dog>
<MMSprite: Player>

If you have templates with these names, it will get the data from them. 
Template names are not case-sensitive. But the note tags are!

============================================================================
Update Log
============================================================================

https://tinyurl.com/minimapLog

============================================================================

@param minimap
@text Minimap
@type struct<minimapSt>
@desc Settings for the minimap on the Scene_Map
@default {"switch":"0","commonEvent":"0","mask":"{\"shape\":\"rect\",\"image\":\"\",\"width\":\"200\",\"height\":\"200\",\"circleRadius\":\"90\",\"roundedRectBorder\":\"20\",\"starEdges\":\"5\",\"starOuterRadius\":\"90\",\"starInnerRadius\":\"90\"}","win":"{\"enable\":\"true\",\"skin\":\"\",\"pad\":\"40\",\"backOpacity\":\"150\",\"opacity\":\"255\"}","background":"{\"color\":\"blue\",\"opacity\":\"0\"}","position":"{\"alignX\":\"left\",\"offsetX\":\"10\",\"alignY\":\"top\",\"offsetY\":\"10\"}","noiseFilter":"{\"enable\":\"false\",\"layer\":\"Minimap\",\"intensity\":\"random\",\"seed\":\"random\",\"dynamicSeed\":\"true\",\"seedTimer\":\"8\"}","overlayImage":"","opacity":"255"}

@param fullMinimap
@text Full Minimap Scene
@type struct<sceneSt>
@desc Settings for the minimap on the Scene_Minimap
@default {"sceneBackground":"{\"type\":\"previousScene\",\"image\":\"\",\"color\":\"black\",\"opacity\":\"255\"}","mask":"{\"shape\":\"rect\",\"image\":\"\",\"width\":\"350\",\"height\":\"350\",\"circleRadius\":\"90\",\"roundedRectBorder\":\"20\",\"starEdges\":\"5\",\"starOuterRadius\":\"90\",\"starInnerRadius\":\"90\"}","win":"{\"enable\":\"true\",\"skin\":\"\",\"pad\":\"40\",\"backOpacity\":\"150\",\"opacity\":\"255\"}","background":"{\"color\":\"blue\",\"opacity\":\"0\"}","position":"{\"alignX\":\"center\",\"offsetX\":\"0\",\"alignY\":\"center\",\"offsetY\":\"0\"}","noiseFilter":"{\"enable\":\"false\",\"layer\":\"Minimap\",\"intensity\":\"0.5\",\"seed\":\"random\",\"dynamicSeed\":\"true\",\"seedTimer\":\"8\"}","camera":"{\"moveSpeed\":\"6\",\"dashSpeed\":\"1\"}","overlayImage":"","opacity":"255"}

@param common
@text Common Settings
@type struct<commonSt>
@desc Common settings for the minimap that work for Scene_Map and Scene_Minimap
@default {"tilesize":"12","scrollLimit":"true","tilesetColors":"{\"priority1\":\"\",\"region\":\"[]\",\"priority2\":\"\",\"terrain\":\"{\\\"0\\\":\\\"white\\\",\\\"1\\\":\\\"DarkRed\\\",\\\"2\\\":\\\"black\\\",\\\"3\\\":\\\"DarkGreen\\\",\\\"4\\\":\\\"aqua\\\",\\\"5\\\":\\\"DarkOrchid\\\",\\\"6\\\":\\\"yellow\\\",\\\"7\\\":\\\"pink\\\"}\",\"priority3\":\"\",\"ladder\":\"brown\",\"bush\":\"green\",\"counter\":\"DarkGray\",\"damage\":\"purple\",\"priority4\":\"\",\"passable\":\"Cornsilk\",\"impassable\":\"red\"}"}

@param markers
@text Minimap Markers
@type struct<markersSt>
@desc The minimap markers setting.
@default {"iconFile":"IconSet","iconSize":"32","iconTemplates":"[]","spriteTemplates":"[]"}

*/

/* --------------------------------- MINIMAP -------------------------------- */
{
/*~struct~minimapSt:

@param switch
@text Hide Switch
@type switch
@desc Turn this switch on to hide the minimap.
@default 0

@param commonEvent
@text Click/Touch CE
@type common_event
@desc Select a common event to play when click/touch the minimap.
@default 0

@param mask
@text Mask
@type struct<maskSt>
@desc This will define the visible area of the minimap.
@default {"shape":"rect","image":"","width":"200","height":"200","circleRadius":"90","roundedRectBorder":"20","starEdges":"5","starOuterRadius":"90","starInnerRadius":"90"}

@param win
@text Window
@type struct<winSt>
@desc Optionally put the minimap inside a window.
@default {"enable":"true","skin":"","pad":"40","backOpacity":"150","opacity":"255"}

@param background
@text Background
@type struct<backgroundSt>
@desc The Minimap background.
@default {"color":"blue","opacity":"0"}

@param position
@text Position
@type struct<positionSt>
@desc The position of the minimap.
@default {"alignX":"left","offsetX":"10","alignY":"top","offsetY":"10"}

@param noiseFilter
@text Noise filter
@type struct<noiseFilterSt>
@desc Noise filter settings.
@default {"enable":"false","layer":"Minimap","intensity":"random","seed":"random","dynamicSeed":"true","seedTimer":"8"}

@param overlayImage
@text Overlay Image
@type file
@dir img/minimap
@desc An image to display above the minimap.
@default

@param opacity
@text Opacity
@type number
@min 0
@max 255
@desc This opacity will affect only the minimap image/sprite.
@default 255

*/
}

/* ------------------------------ MINIMAP SCENE ----------------------------- */
{

/*~struct~sceneSt:

@param sceneBackground
@text Scene Background
@type struct<sceneBackgroundSt>
@desc The background of the scene.
@default {"type":"previousScene","image":"","color":"black","opacity":"255"}

@param mask
@text Mask
@type struct<maskSt>
@desc This will define the visible area of the minimap.
@default {"shape":"rect","image":"","width":"350","height":"350","circleRadius":"90","roundedRectBorder":"20","starEdges":"5","starOuterRadius":"90","starInnerRadius":"90"}

@param win
@text Window
@type struct<winSt>
@desc Optionally put the minimap inside a window.
@default {"enable":"true","skin":"","pad":"40","backOpacity":"150","opacity":"255"}

@param background
@text Minimap Background
@type struct<backgroundSt>
@desc Configure the Minimap background color.
@default {"color":"blue","opacity":"0"}

@param position
@text Position
@type struct<positionSt>
@desc The position of the minimap.
@default {"alignX":"center","offsetX":"0","alignY":"center","offsetY":"0"}

@param noiseFilter
@text Noise filter
@type struct<noiseFilterSt>
@desc Noise filter settings.
@default {"enable":"false","layer":"Minimap","intensity":"0.5","seed":"random","dynamicSeed":"true","seedTimer":"8"}

@param camera
@text Camera
@type struct<cameraSt>
@desc Full minimap camera.
@default {"moveSpeed":"6","dashSpeed":"1"}

@param overlayImage
@text Overlay Image
@type file
@dir img/minimap
@desc An image to display above the minimap.
@default

@param opacity
@text Opacity
@type number
@min 0
@max 255
@desc This opacity will affect only the minimap image/sprite.
@default 255

*/
    
}

/* --------------------------------- WINDOW --------------------------------- */
{
/*~struct~winSt:

@param enable
@text Enable
@type boolean
@desc Enable or disable the window as a container for the minimap.
@default true

@param skin
@text Skin File
@type file
@dir img/system
@desc The window skin file. Leave empty for default.
@default

@param pad
@text Window Pad
@type number
@desc The distance between the border of the window and the minimap sprite.
@default 18

@param backOpacity
@text Back Opacity
@min 0
@max 255
@type number
@desc The back opacity of the window.
@default 255

@param opacity
@text Opacity
@min 0
@max 255
@type number
@desc The main opacity of the window.
@default 255

*/
}

/* --------------------------- MINIMAP BACKGROUND --------------------------- */
{
/*~struct~backgroundSt:

@param color
@text Color
@type text
@desc The background color. 
Can use HTML or CSS colors. Leave in blank for nothing.
@default blue

@param opacity
@text Opacity
@type number
@min 0
@max 255
@desc The background opacity.
@default 255

*/
}

/* ---------------------------- SCENE BACKGROUND ---------------------------- */
{
/*~struct~sceneBackgroundSt:

@param type
@text Type
@type select
@option color
@option previousScene
@option image
@desc "Previous" takes a snap from the main map screen.
@default previousScene

@param image
@text Image
@type file
@dir img/minimap
@desc Only works if the background type is an image.
@default

@param color
@text Color
@type text
@desc The background color. 
Can use HTML or CSS colors. Leave in blank for nothing.
@default black

@param opacity
@text Opacity
@type number
@min 0
@max 255
@desc The background opacity.
@default 255

*/
}

/* ---------------------------------- MASK ---------------------------------- */
{
/*~struct~maskSt:

@param shape
@text Shape
@type select
@option rect
@option circle
@option roundedRect
@option star
@option image
@desc The shape of the minimap. 
If circle, the width and height must always be the same value.
@default rect

@param image
@text Mask Image
@type file
@dir img/minimap
@desc The image to shape the minimap. 
Only works for shape = image.
@default

@param width
@text Width
@type text
@desc The width of the mask.
@default 200

@param height
@text Height
@type text
@desc The height of the mask.
@default 200

@param circleRadius
@text Circle radius
@type text
@desc The radius of the circle. This value must be always less than the height/width.
@default 90

@param roundedRectBorder
@text Rounded Rect Border
@type text
@desc The size of the rounded borders.
@default 20

@param starEdges
@text Star Edges
@type text
@desc How much points the star will have.
@default 5

@param starOuterRadius
@text Star Radius
@type text
@desc The outer radius of the star.
@default 90

@param starInnerRadius
@text Star Inner Radius
@type text
@desc The inner radius of the star.
@default 90

*/
}

/* -------------------------------- POSITION -------------------------------- */
{
/*~struct~positionSt:

@param alignX
@text Align X
@type select
@option none
@option left
@option center
@option right
@desc Select none to only use offset value.
@default left

@param offsetX
@text Position X
@type text
@desc The Offset X position of the minimap
@default 10
@parent alignX

@param alignY
@text Align Y
@type select
@option none
@option top
@option center
@option bottom
@desc Select none to only use offset value.
@default top

@param offsetY
@text Position Y
@type text
@desc The offset Y position of the minimap
@default 10
@parent alignY

*/
}

/* ------------------------------ NOISE FILTER ------------------------------ */
{

/*~struct~noiseFilterSt:

@param enable
@text Enable
@type boolean
@desc Enable the noise filter.
@default false

@param layer
@text Layer
@type select
@option Window
@option Minimap
@desc Choose if the noise filter will be applied only on the minimap image or in the window too.
@default Minimap

@param intensity
@text Intensity
@type combo
@desc The intensity. Can be random or a number from 0 to 1.
Example: 0.5
@default random

@param seed
@text Seed
@type combo
@option random
@desc Can be random or a number from 0 to 1.
Example: 0.5
@default random

@param dynamicSeed
@text Dynamic Seed
@type boolean
@desc Set this to true to keep changing the seed randomly
@default false

@param seedTimer
@text Seed timer
@type number
@desc The time in frames, that the noise seed value will change.
@default 8
@parent dynamicSeed

*/

}

/* --------------------------------- CAMERA --------------------------------- */
{
/*~struct~cameraSt:

@param moveSpeed
@text Move Speed
@type number
@desc How fast the camera will move on the minimap scene.
@default 6

@param dashSpeed
@text Dash Speed
@type number
@desc How much faster the camera will move when pressing shift.
@default 1

*/
}

/* ----------------------------- COMMON SETTINGS ---------------------------- */
{

/*~struct~commonSt:

@param tilesize
@text Tilesize
@type number
@desc The size of the tile on the minimap.
Minimum 2.
@default 12

@param scrollLimit
@text Scroll Limit
@type boolean
@desc Set true if you want the minimap stop scrooling with the game map.
@default true

@param tilesetColors
@text Tileset Colors
@type struct<tilesetColorsSt>
@desc Set a color for each type of tileset. Can use HTML/RGB/RGBA/HEX colors.
@default {"priority1":"","region":"[]","priority2":"","terrain":"{\"0\":\"white\",\"1\":\"DarkRed\",\"2\":\"black\",\"3\":\"DarkGreen\",\"4\":\"aqua\",\"5\":\"DarkOrchid\",\"6\":\"yellow\",\"7\":\"pink\"}","priority3":"","ladder":"brown","bush":"green","counter":"DarkGray","damage":"purple","priority4":"","passable":"Cornsilk","impassable":"red"}

*/

}

/* ----------------------------- TILESET COLORS ----------------------------- */
{
/*~struct~tilesetColorsSt:

@param priority1
@text Priority 1

@param region
@text Region Colors
@type struct<regionColorsSt>[]
@desc The colors for each region id. Leave blank for nothing.
@default []
@parent priority1

@param priority2
@text Priority 2

@param terrain
@text Terrain Colors
@type struct<terrainSt>
@desc The colors for each terrain tag. Leave blank for nothing.
@default {"0":"white","1":"DarkRed","2":"black","3":"DarkGreen","4":"aqua","5":"DarkOrchid","6":"yellow","7":"pink"}
@parent priority2

@param priority3
@text Priority 3

@param ladder
@text Ladder Color
@type text
@desc The color applied to all ladder tiles. Leave blank for nothing.
@default brown
@parent priority3

@param bush
@text Bush Color
@type text
@desc The color applied to all bush tiles. Leave blank for nothing.
@default green
@parent priority3

@param counter
@text Counter Color
@type text
@desc The color applied to all counter tiles. Leave blank for nothing.
@default DarkGray
@parent priority3

@param damage
@text Damage Floor Color
@type text
@desc The color applied to all damage tiles. Leave blank for nothing.
@default purple
@parent priority3

@param priority4
@text Priority 4

@param passable
@text Passable Color
@type text
@desc The color applied to all tiles that are passable. Marked with "O". Leave blank for nothing.
@default blue
@parent priority4

@param impassable
@text Impassable Color
@type text
@desc The color applied to all tiles that are impassable. Marked with "X". Leave blank for nothing.
@default red
@parent priority4

*/
}

/* ------------------------------ REGION COLORS ----------------------------- */
{
/*~struct~regionColorsSt:

@param id
@text Id
@type number
@min 1
@max 255
@desc The region Id.
@default 1

@param color
@text Color
@type text
@desc The color of this region id.
@default Olive

*/
}

/* ----------------------------- TERRAIN COLORS ----------------------------- */
{
/*~struct~terrainSt:

@param 0
@text Terrain 0
@type text
@desc Leave blank for nothing.
@default white

@param 1
@text Terrain 1
@type text
@desc Leave blank for nothing.
@default #ff0000

@param 2
@text Terrain 2
@type text
@desc Leave blank for nothing.
@default black

@param 3
@text Terrain 3
@type text
@desc Leave blank for nothing.
@default green

@param 4
@text Terrain 4
@type text
@desc Leave blank for nothing.
@default aqua

@param 5
@text Terrain 5
@type text
@desc Leave blank for nothing.
@default purple

@param 6
@text Terrain 6
@type text
@desc Leave blank for nothing.
@default yellow

@param 7
@text Terrain 7
@type text
@desc Leave blank for nothing.
@default pink

*/
}

/* ----------------------------- GENERAL MARKERS ---------------------------- */
{
/*~struct~markersSt:

@param iconFile
@text Icon Image
@type file
@dir img/system
@desc The icon image to be used by the icon markers.
@default IconSet

@param iconSize
@text Icon Size
@type number
@desc The size of the icon frame. Must be a square.
Default 32x32
@default 32
@parent iconFile

@param iconTemplates
@text Icon Templates
@type struct<iconMarkersSt>[]
@desc Here you can setup templates for markers that will use icons.
@default []

@param spriteTemplates
@text Sprite Templates
@type struct<spriteMarkersSt>[]
@desc Here you can setup templates for markers that will use map sprites.
@default []

*/
}

/* ------------------------------ ICON MARKERS ------------------------------ */
{
/*~struct~iconMarkersSt:

@param name
@text Name
@type combo
@option boat
@option ship
@option airship
@desc The name to be referenced in the comment of the event or actor note. Cannot have spaces.
@default Chest

@param iconIndex
@text Icon index
@type text
@desc Choose an icon from your iconset image.
Right click > Insert Icon index
@default

@param hue
@text Hue
@type number
@min 0
@max 360
@desc The hue of the icon.
0~360
@default 0

@param scale
@text Zoom
@type text
@desc The default zoom to be show on the map.
@default 0.5

@param syncTransparency
@text Sync Transparency
@type boolean
@desc Set this to true if you want to sync transparency of the marker with the character.
@default true

@param syncDirection
@text Sync Direction
@type boolean
@desc Set this to true if you want to sync direction of the marker with the character.
@default false

@param blinkDuration
@text Blink Duration
@type number
@desc Leave at 1 for not blink.
Duration is in frames.
@default 1

@param minOpacity
@text Blink Min Opacity
@min 0
@max 255
@type number
@desc The minimum opacity to get when blinking.
@default 255
@parent blinkDuration

*/
}

/* ----------------------------- SPRITE MARKERS ----------------------------- */
{
/*~struct~spriteMarkersSt:

@param name
@text Name
@type combo
@option boat
@option ship
@option airship
@desc The name to be referenced in the comment of the event or actor note. Cannot have spaces.
@default Chest

@param scale
@text Zoom
@type text
@desc The default zoom to be show on the map.
@default 0.5

@param syncStepAnim
@text Sync Step Animation
@type boolean
@desc Set this to false if you don't want to animate the character on the minimap.
@default true

@param syncTransparency
@text Sync Transparency
@type boolean
@desc Set this to true if you want to sync transparency of the marker with the character.
@default true

@param syncDirection
@text Sync Direction
@type boolean
@desc Set this to true if you want to sync direction of the marker with the character.
@default true

@param blinkDuration
@text Blink Duration
@type number
@desc Leave at 1 for not blink.
Duration is in frames.
@default 1

@param minOpacity
@text Blink Min Opacity
@min 0
@max 255
@type number
@desc The minimum opacity to get when blinking.
@default 255

*/
}


"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_MinimapEx = true


/* Future Updates:

- Talvez criar opção de animar os sprites na cena de full minimap
- Navigate through characters on the full minimap
- Toll tips on characters or Description window for each character
- Options command to enable/disable the minimap
- Cancel button image on the full minimap scene.
- Visible cursor on the full minimap.
- Integration with Eli Reveal MAP

*/

/* ========================================================================== */
/*                                    ALERT                                   */
/* ========================================================================== */
{
const pluginName = "Eli Minimap Pro"
const requiredVersion = 5.08
const messageVersion = "5.0.8"

if(!Eli.Book){

    const msg = `${pluginName}:\nYou are missing the core plugin: Eli Book.\nPlease, click ok to download it now.`
    if(window.confirm(msg)){
        nw.Shell.openExternal("https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz")
    }

}else if(Eli.Book.version < requiredVersion){

    const msg = `${pluginName}:\nYou need Eli Book version ${messageVersion} or higher.\nPlease, click ok to download it now.`
    if(window.confirm(msg)){
        nw.Shell.openExternal("https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz")
    }
}

}

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

const ROTATION_TABLE = {
    2: 0,
    4: 1.5707963267948966,
    6: 4.71238898038469,
    8: 3.141592653589793
}

const SPRITE_TAG = "MMSprite"
const ICON_TAG = "MMIcon"
const MAP_TILE_META = "TileMinimap"
const MAP_IMG_META = "ImgMinimap"

class Window_Minimap extends Window_Base {

    initialize(rect, parameters){
        const {x, y, width, height} = rect
        super.initialize(x, y, width, height)
        Plugin.displayObjects.window = this
        this.initProps(parameters)
        this.loadWindowskin()
        this.adjustWindowSettings()
        this.createMinimap()

        if(this.hasNoiseFilter()){
            this.addFilter()
        }

        if(Plugin.isMinimapHidden()){
            this.openness = 0
        }
    }

    initProps(parameters){
        this.parameters = parameters
        this.noiseFilter = this.createNoiseFilter()
        this.noiseSeedTimer = 0
        this.updateNoiseFilterFunction = () => {}
        if(SceneManager._scene.constructor.name === "Scene_Map"){
            this.updateVisibilityFunction = this.updateVisibility
        }else{
            this.updateVisibilityFunction = () => {}
        }
    }

    createNoiseFilter(){
        const noise = Number(this.parameters.noiseFilter.intensity) || Math.random()
        const seed = Number(this.parameters.noiseFilter.seed) || Math.random()

        return new PIXI.filters.NoiseFilter(noise, seed)
    }

    loadWindowskin(){
        if(this.parameters && this.parameters.win.skin){
            this.windowskin = ImageManager.loadSystem(this.parameters.win.skin)
        }else{
            super.loadWindowskin()
        }
    }

    adjustWindowSettings(){
        if(this.parameters.win.enable){
            this.padding = this.parameters.win.pad
            this.opacity = this.parameters.win.opacity
            this.backOpacity = this.parameters.win.backOpacity
        }else{
            this.padding = 0
            this.opacity = 0
            this.backOpacity = 0
        }
    }

    createMinimap(){
        this.minimap = new Sprite_Minimap(this.parameters, this)
        this._windowContentsSprite.addChild(this.minimap)
    }

    hasNoiseFilter(){
        const param = this.parameters
        return param.noiseFilter.enable && param.noiseFilter.layer === "Window"
    }

    addFilter(){
        this.filters = [this.noiseFilter]
        if(this.parameters.noiseFilter.dynamicSeed){
            this.updateNoiseFilterFunction = this.updateNoiseFilter
        }
    }

    updateNoiseFilter(){
        this.noiseSeedTimer++
        
        if(this.noiseSeedTimer > this.parameters.noiseFilter.seedTimer){
            this.noiseFilter.seed = Math.random()
            this.noiseSeedTimer = 0
        }
    }

    updateVisibility(){
        if(Plugin.isMinimapHidden()){
            this.close()
        }else{
            this.open()
        }
    }

    update(){
        super.update()
        this.updateVisibilityFunction()
        this.updateNoiseFilterFunction()
    }
}

class Sprite_Minimap extends Sprite {

    initialize(parameters, win){
        super.initialize()
        Plugin.displayObjects.container = this
        this.initProps(parameters, win)
        this.createBackground()
        this.createMask()
        this.createTilemap()
        this.createMarkers()
        this.createOverlayImage()
        this.createScrollBoundries()
        
        if(this.hasNoise()){
            this.initFilter()
        }

    }

    initProps(parameters, win){
        this.parameters = parameters
        this.scrollBoundries = {
            minX: 0, 
            maxX: 0,
            minY: 0,
            maxY: 0
        }
        this.display = {
            x: 0,
            y: 0,
        }
        this.markerSpritesObj = Plugin.displayObjects.markersObj
        this.markerSpritesArray = Plugin.displayObjects.markersArray
        this.mainWindow = win
        this.noiseFilter = this.createNoiseFilter()
        this.noiseSeedTimer = 0
        this.updateNoiseFilterFunction = () => {}
    }

    createNoiseFilter(){
        const noise = Number(this.parameters.noiseFilter.intensity) || Math.random()
        const seed = Number(this.parameters.noiseFilter.seed) || Math.random()

        return new PIXI.filters.NoiseFilter(noise, seed)
    }

    createBackground(){
        const {color, opacity} = this.parameters.background
        const {width, height} = this.parameters.mask
        
        this.background = new Sprite_MinimapBackground(width, height, color, opacity)
        this.addChild(this.background)
    }

    createMask(){
        if(this.parameters.mask.shape === "image"){
            const bitmap = ImageManager.loadMinimap(this.parameters.mask.image)
            this.mask = new Sprite_MinimapMask(bitmap)
        }else{
            this.mask = new PIXI.Graphics().beginFill()
            this.refreshMaskShape()
        }
        
        this.addChild(this.mask)
    }

    refreshMaskShape(){
        const {
            width, height, circleRadius, 
            roundedRectBorder, starEdges,
            starOuterRadius, starInnerRadius
        } = this.parameters.mask

        const position = width/2

        switch(this.parameters.mask.shape){
            case "rect":
                this.mask.drawRect(0, 0, width, height)
                break
            case "circle":
                this.mask.drawCircle(position, position, circleRadius)
                break
            case "roundedRect":
                this.mask.drawRoundedRect(0, 0, width, height, roundedRectBorder)
                break
            case "star":
                this.mask.drawStar(position, position, starEdges, starOuterRadius, starInnerRadius, 0)
                break   
        }

        this.mask.endFill()
    }

    createTilemap(){
        if(this.isTileMinimap()){
            this.tilemap = new Sprite_MinimapTile()
        }else{
            this.tilemap = new Sprite_MinimapImage()
        }
        
        this.addChild(this.tilemap)
    }

    isTileMinimap(){
        return $dataMap && $dataMap.meta.hasOwnProperty(MAP_TILE_META)
    }

    createMarkers(){
        this.createEventMarkers()
        this.createVehicleMarkers()
        this.createPlayerMarker()
        Plugin.eventsCanRefreshMarker = true
    }

    createEventMarkers(){
        for(const event of $gameMap.events()){
            //if(event._erased) continue
            event.createMinimapMarkerData()
            event.setMinimapMarkerByNote()

            if(!!event.page()) {
                const max = Math.min(event.list().length, 20)
    
                for(let i = 0; i < max; i++){
                    const cmd = event.list()[i]
    
                    if(cmd.code === 108){
                        event.searchCommentForMinimapMarker(cmd)
                    }
                }
            }

            this.addMarkerSprite(event)
        }
    }

    createPlayerMarker(){
        this.addMarkerSprite($gamePlayer)
    }

    createVehicleMarkers(){
        for(const vehicle of $gameMap.vehicles()){
            this.addMarkerSprite(vehicle)
        }
    }

    addMarkerSprite(char){
        const marker = new Sprite_MinimapMarker(char)
        this.addChild(marker)
    }

    createOverlayImage(){
        const bitmap = ImageManager.loadMinimap(this.parameters.overlayImage)
        this.overlaySprite = new Sprite_MinimapOverlay(bitmap)
        this.addChild(this.overlaySprite)
    }

    createScrollBoundries(){
        const [tilemapWidth, tilemapHeight] = this.tilemap.getSize()
        
        if(this.canSetScrollBoundries()){
            
            const {width, height} = this.parameters.mask
            let minX = 0
            let maxX = 0
            let minY = 0
            let maxY = 0

            if(tilemapWidth >= width){
                minX = width - tilemapWidth
            }else{
                minX = Math.abs(width - tilemapWidth)/2
                maxX = minX
            }

            if(tilemapHeight >= height){
                minY = height - tilemapHeight
            }else{
                minY = Math.abs(height - tilemapHeight)/2
                maxY = minY
            }
            
            this.setScrollBoundries(minX, maxX, minY, maxY)

        }else{
            this.setScrollBoundries(-tilemapWidth, tilemapWidth, -tilemapHeight, tilemapHeight)
        }

    }

    canSetScrollBoundries(){
        return Plugin.parameters.common.scrollLimit
    }

    setScrollBoundries(minX, maxX, minY, maxY){
        this.scrollBoundries = {
            minX: minX, maxX: maxX,
            minY: minY, maxY: maxY
        }
    }

    hasNoise(){
        return this.parameters.noiseFilter.enable && this.parameters.noiseFilter.layer === "Minimap"
    }

    initFilter(){
        this.noiseSeedTimer = 0
        this.filters = [this.noiseFilter]
        if(this.parameters.noiseFilter.dynamicSeed){
            this.updateNoiseFilterFunction = this.updateNoiseFilter
        }
    }

    updateNoiseFilter(){
        this.noiseSeedTimer++
        
        if(this.noiseSeedTimer > this.parameters.noiseFilter.seedTimer){
            this.noiseFilter.seed = Math.random()
            this.noiseSeedTimer = 0
        }
    }

    update(){
        super.update()
        this.updateNoiseFilter()
        this.updateTilemapPosition()
        this.updateOffset()
    }

    updateTilemapPosition(){
        this.tilemap.x = this.display.x
        this.tilemap.y = this.display.y
    }

    updateOffset(){
        const x = Plugin.character._realX
        const y = Plugin.character._realY
        const tilesize = Plugin.parameters.common.tilesize
        const offsetX = (this.parameters.mask.width / 2) - (x * tilesize * this.scale.x)
        const offsetY = (this.parameters.mask.height / 2) - (y * tilesize * this.scale.y)
        const {minX, maxX, minY, maxY} = this.scrollBoundries
        const finalY =  offsetY.clamp(minY, maxY)
        const finalX = offsetX.clamp(minX, maxX)

        this.display.x = finalX
        this.display.y = finalY
    }

    centerCameraPosition(){
        const backSprite = this.mainWindow._windowContentsSprite
        const [tilemapWidth, tilemapHeight] = this.tilemap.getSize()

        if(backSprite.width > tilemapWidth){
            Plugin.character._realX = $gameMap.width()/2
        }
        
        if(backSprite.height > tilemapHeight){
            Plugin.character._realY = $gameMap.height()/2
        }
    }

}

class Sprite_MinimapMask extends Sprite{

    initialize(bitmap){
        super.initialize(bitmap)
        this.iniProps()
    }

    iniProps(){
        this.zIndex = 1
    }

}

class Sprite_MinimapBackground extends Sprite {

    initialize(width, height, color, opacity){
        super.initialize()
        this.iniProps(opacity)
        this.createBitmap(width, height, color)
    }

    iniProps(opacity){
        this.zIndex = 0
        this.opacity = opacity
    }

    createBitmap(width, height, color){
        const bitmap = new Bitmap(width, height)
        bitmap.fillAll(color)
        this.bitmap = bitmap
    }

}

class Sprite_MinimapImage extends Sprite {

    initialize(bitmap){
        super.initialize(bitmap)
        Plugin.displayObjects.image = this
        this.initProps()
        this.createBitmap()
    }

    initProps(){
        this.tilesize = Plugin.parameters.common.tilesize
        this.zIndex = 2
    }

    createBitmap(){
        this.bitmap = this.createMinimapBitmap()
    }

    createMinimapBitmap(){
        const mapFilename = $gameMap.getMinimapImage()
        const [width, height] = this.getSize()
        const mapBitmap = new Bitmap(width, height)
        const tempBitmap = ImageManager.loadMinimap(mapFilename)
        
        tempBitmap.addLoadListener(() => {
            mapBitmap.blt(tempBitmap, 0, 0, tempBitmap.width, tempBitmap.height, 0, 0, width, height)
        })

        return mapBitmap
    }

    getSize(){
        return [
            $gameMap.width() * this.tilesize,
            $gameMap.height() * this.tilesize,
        ]
    }

}

class Sprite_MinimapTile extends Sprite_MinimapImage {

    createMinimapBitmap(){
        const [width, height] = this.getSize()
        const mapBitmap = new Bitmap(width, height)

        for(let x = 0; x < $gameMap.width(); x++){ 

            for(let y = 0; y < $gameMap.height(); y++){
                this.paintTile(mapBitmap, x, y)
            }
        }

        return mapBitmap
    }

    paintTile(mapBitmap, x, y){
        const tilesize = this.tilesize
        const color = this.findTileColor(x, y)

        if(color){ 
            mapBitmap.fillRect(x * tilesize, y * tilesize, tilesize, tilesize, color)
        }
    }

    findTileColor(x, y){
        const colors = Plugin.parameters.common.tilesetColors
        const terrainId = $gameMap.terrainTag(x, y)
        const regionid = $gameMap.regionId(x, y)
        const terrainColor = colors.terrain[terrainId]
        const regionColor = colors.region.find(item => item.id === regionid)
        
        if(regionColor){
            return regionColor.color

        }else if(terrainColor){
            return terrainColor

        }else if($gameMap.isLadder(x, y)){
            return colors.ladder

        } else if($gameMap.isBush(x, y)){
            return colors.bush

        }else if($gameMap.isCounter(x, y)){
            return colors.counter

        }else if($gameMap.isDamageFloor(x, y)){
            return colors.damage

        }else if(this.isTilePassable(x, y)){
            return colors.passable

        }else{
            return colors.impassable
        }

    }
}

class Sprite_MinimapOverlay extends Sprite {

    initialize(bitmap){
        super.initialize(bitmap)
        Plugin.displayObjects.overlay = this
        this.initProps()
    }

    initProps(){
        this.zIndex = 4
    }

}

class Sprite_MinimapMarker extends Sprite{

    initialize(char){
        super.initialize()
        Plugin.displayObjects.markersArray.push(this)
        Plugin.displayObjects.markersObj[char.getSpriteId()] = this
        this.initProps(char)
        this.refreshSettings()
    }

    initProps(char){
        this.anchor.set(0.5, 1)
        this.character = char
        this.zIndex = 3
        this.hueFilter = new PIXI.filters.ColorMatrixFilter()
        this.updateFunction = () => {}
    }

    setHue(hue){
        if(!this.filters || !this.filters.includes(this.hueFilter)){
            this.filters = [this.hueFilter]
        }
        this.hueFilter.hue(hue)
    }

    refreshUpdateFunction(){
        const type = this.getData().type

        const method = {
            none: () => {},
            icon: this.updateIcon,
            sprite: this.updateSprite,
        }
        this.updateFunction = method[type].bind(this)
    }

    refreshSettings(){
        const {scale, hue, type, iconIndex} = this.getData()
        this.scale.set(scale, scale)

        if(type === "icon"){
            this.setHue(hue)
            this.buildIconBitmap(iconIndex)
        }else if(type === "sprite"){
            this.refreshPivotTable()
        }

        this.refreshUpdateFunction()
    }

    refreshPivotTable(){
        const halfHeight = this.height/2
        this.pivotTable = {
            2: {x: 0, y: 0},
            4: {x: halfHeight, y: -halfHeight},
            6: {x: -halfHeight, y: -halfHeight},
            8: {x: 0, y: -this.height}
        }
    }

    getOriginalSprite(){
        return this.character.getMapSprite()
    }

    getData(){
        return this.character.getMinimapMarkerData()
    }

    update(){
        super.update()
        this.updateFunction()
    }

    updateSprite(){
        this._bitmap = this.getOriginalSprite()._bitmap
        this.updateTransparency()
        this.updateOpacity()
        this.updatePosition()
        this.updateFrame()
    }

    updateIcon(){
        this.updateTransparency()
        this.updateOpacity()
        this.updatePosition()
        if(this.getData().syncDirection){
            this.updateIconDirection()
        }
    }

    buildIconBitmap(iconIndex){
        const {iconFile, iconSize} = Plugin.getIcon()
        const iconImage = ImageManager.loadSystem(iconFile)

        iconImage.addLoadListener(() => {
            const w = iconSize
            const h = iconSize
            const iconCols = iconImage.width/iconSize
            const sx = iconIndex % iconCols * w
            const sy = Math.floor(iconIndex / iconCols) * h
            const sw = w //iconImage.width ON MZ this works... But on MV not... why? xD
            const sh = h //iconImage.height ON MZ this works... But on MV not... why? xD
            const bitmap = new Bitmap(w, h)

            bitmap.blt(iconImage, sx, sy, sw, sh, 0, 0)

            this.bitmap = bitmap
            this.refreshPivotTable()
        })
    }

    createFrame(){
        const sprite = this.getOriginalSprite()
        const patternX = this.getData().syncStepAnim ? sprite.characterPatternX() : 1
        const patternY = this.getData().syncDirection ? sprite.characterPatternY() : 0
        const pw = sprite.patternWidth()
        const ph = sprite.patternHeight()
        const sx = (sprite.characterBlockX() + patternX) * pw
        const sy = (sprite.characterBlockY() + patternY) * ph

        return [sx, sy, pw, ph]
    }

    updateFrame(){
        const [sx, sy, pw, ph] = this.createFrame()

        this.setFrame(sx, sy, pw, ph)
    }

    updateTransparency(){
        this.visible = !this.getData().syncTransparency || !this.character.isTransparent()
    }

    updatePosition(){
        const tilesize = Plugin.parameters.common.tilesize
        const charX = (this.character._realX * tilesize) + tilesize/2
        const charY = (this.character._realY * tilesize) + tilesize
        const displayX = Plugin.displayObjects.container.display.x
        const displayY = Plugin.displayObjects.container.display.y
        const x = displayX + charX 
        const y = displayY + charY 

        this.move(x, y)
    }

    updateOpacity(){
        if(this.opacity > this.getData().minOpacity){
            const targetOpacity = this.opacity - (this.opacity / this.getData().blinkDuration)
            this.opacity = Math.max(targetOpacity, this.getData().minOpacity)
        }else{
            this.opacity = this.character.opacity()
        }
    }

    updateIconDirection(){
        const direction = this.character.direction()
        const {x, y} = this.pivotTable[direction]

        this.rotation = ROTATION_TABLE[direction]
        this.pivot.set(x, y)
    }
}

/* ------------------------------ MINIMAP SCENE ----------------------------- */

class Scene_Minimap extends Scene_Base{

    create(){
        this.createBackground()
        this.createMinimap()
        this.createCamera()
    }

    createBackground(){
        this.backgroundSprite = new Sprite_MinimapSceneBackground()
        this.addChild(this.backgroundSprite)
    }

    createMinimap(){
        const rect = this.createMinimapRect()

        this.winMinimap = new Window_Minimap(rect, Plugin.parameters.fullMinimap)
        this.winMinimap.update()
        this.addChild(this.winMinimap)
    }

    createCamera(){
        this.cameraCharacter = new Sprite_FullMinimapCamera()
    }
    
    createMinimapRect(){
        const {width, height} = Plugin.parameters.fullMinimap.mask
        const {alignX, alignY, offsetX, offsetY} = Plugin.parameters.fullMinimap.position
        const pad = Plugin.parameters.fullMinimap.win.pad * 2
        const x = Eli.Utils.calculateScreenPosition(alignX, offsetX, width + pad, "x")
        const y = Eli.Utils.calculateScreenPosition(alignY, offsetY, height + pad, "y")
        
        return new Rectangle(x, y, width + pad, height + pad)
    }

    update(){
        super.update()
        this.cameraCharacter.update()
        if(Input.isPressed("cancel") || TouchInput.isCancelled()){
            this.popScene()
        }
    }
}

class Sprite_MinimapSceneBackground extends Sprite {

    initialize(){
        super.initialize()
        this.initProps()
        this.start()
    }

    initProps(){
        this.opacity = Plugin.parameters.fullMinimap.sceneBackground.opacity
        this.blurFilter = new PIXI.filters.BlurFilter()
    }

    start(){
        if(Plugin.parameters.fullMinimap.sceneBackground.type === "previousScene"){
            this.filters = [this.blurFilter]
            this.bitmap = null
            this.opacity = 192
        }else{
            const bitmap = ImageManager.loadMinimap(Plugin.parameters.fullMinimap.sceneBackground.image)
            this.bitmap = bitmap
        }
    }

    needCreateBackgroundBitmap(){
        return  SceneManager.backgroundBitmap() && 
                Plugin.parameters.fullMinimap.sceneBackground.type === "previousScene" && 
                !this.bitmap
    }

    update(){
        if(this.needCreateBackgroundBitmap()){
            this.bitmap = SceneManager.backgroundBitmap()
        }
    }

}

class Sprite_FullMinimapCamera {

    constructor(){
        this.initProps()
        this.setBoundries()
        this.setInitialPosition()
        Plugin.character = this
    }

    initProps(){
        this._realX = 0
        this._realY = 0
        this.scrollBoundries = {
            minX: 0,
            minY: 0,
            maxX: 0,
            maxY: 0,
        }
    }

    setBoundries(){
        const tilesize = Plugin.parameters.common.tilesize
        const {width, height} = Plugin.parameters.fullMinimap.mask
        const mapWidth = $gameMap.width()
        const mapHeight = $gameMap.height()

        let minX = (width/2) / tilesize
        let maxX = mapWidth - minX
        let minY = (height/2) / tilesize
        let maxY =  mapHeight - minY

        if(!Plugin.parameters.common.scrollLimit){
            minX -= minX/4
            maxX += maxX/4
            minY -= minY/4
            maxY += maxY/4
        }

        this.scrollBoundries = {
            minX: minX,
            maxX: maxX,
            minY: minY,
            maxY: maxY,
        }
    }

    setInitialPosition(){
        const x = Plugin.character._realX
        const y = Plugin.character._realY
        this._realX = x.clamp(this.getMinX(), this.getMaxX())
        this._realY = y.clamp(this.getMinY(), this.getMaxY())
    }

    getMinX(){
        return this.scrollBoundries.minX
    }

    getMinY(){
        return this.scrollBoundries.minY
    }

    getMaxX(){
        return this.scrollBoundries.maxX
    }

    getMaxY(){  
        return this.scrollBoundries.maxY
    }

    update(){
        this.updateX()
        this.updateY()
    }

    updateX(){
        if(Input.isPressed("left")){
            this._realX = this.updateLeft()
        }

        if(Input.isPressed("right")){
            this._realX = this.updateRight()
        }
    }

    updateLeft(){
        const value = this._realX - this.distancePerFrame()
        return Math.max(this.getMinX(), value)
    }

    updateRight(){
        const value = this._realX + this.distancePerFrame()
        return Math.min(value, this.getMaxX())
    }

    updateY(){
        if(Input.isPressed("up")){
            this._realY = this.updateUp()
        }

        if(Input.isPressed("down")){
            this._realY = this.updateDown()
        }
    }

    updateUp(){
        const value = this._realY - this.distancePerFrame()
        return Math.max(this.getMinY(), value)
    }

    updateDown(){
        const value = this._realY + this.distancePerFrame()
        return Math.min(value, this.getMaxY())
    }

    distancePerFrame() {
        return Math.pow(2, this.realMoveSpeed()) / 256
    }

    realMoveSpeed() {
        const moveSpeed = Plugin.parameters.fullMinimap.camera.moveSpeed
        const dashSpeed = {
            false: 0,
            true: Plugin.parameters.fullMinimap.camera.dashSpeed
        }[this.isDashing()]
        return moveSpeed + dashSpeed
    }
    
    isDashing() {
        return Input.isPressed("shift")
    }

}

/* --------------------------------- PLUGIN --------------------------------- */

Eli.Minimap = {
    
    version: 6.03,
    url: "https://hakuenstudio.itch.io/hakuen-studio-minimap",
    pro: true,
    parameters: {
        minimap: {
            commonEvent: 0,
            switch: 0,
            mask: {
                shape: '',
                image: '',
                circleRadius: 0,
                height: 0,
                roundedRectBorder: 0,
                starEdges: 0,
                starInnerRadius: 0,
                starOuterRadius: 0,
                width: 0,
            },
            win: {enable: true, pad: 0, backOpacity: 0, opacity: 0, skin: ''},
            background: {color: '', opacity: 0},
            position: {alignX: '', alignY: '', offsetX: 0, offsetY: 0},
            noiseFilter: {
                dynamicSeed: true,
                enable: false,
                intensity: 0,
                layer: '',
                seed: '',
                seedTimer: 0,
            },
            overlayImage: '',
            opacity: 0, 
        },
        fullMinimap: {
            sceneBackground: {color: '', opacity: 0, type: '', image: ''},
            mask: {
                shape: '', 
                image: '',    
                circleRadius: 0,
                height: 0,
                roundedRectBorder: 0,
                starEdges: 0,
                starInnerRadius: 0,
                starOuterRadius: 0,
                width: 0,
            },
            win: {enable: true, pad: 0, backOpacity: 0, opacity: 0, skin: ''},
            background: {color: '', opacity: 0},
            position: {alignX: '', alignY: '', offsetX: 0, offsetY: 0},
            noiseFilter: {
                dynamicSeed: true,
                enable: false,
                intensity: 0,
                layer: '',
                seed: '',
                seedTimer: 0,
            },
            camera: {moveSpeed: 0, dashSpeed: 0},
            overlayImage: '',
            opacity: 0,
        },
        common: {
            scrollLimit: false, 
            tilesize: 0,
            tilesetColors: {
                region: [{id: 0, color: ''}],
                regionObj: {0: ''},
                terrain: {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: ''},
                passable: '',
                impassable: '',
                ladder: '',
                bush: '',
                counter: '',
                damage: '',
            },
        },
        markers: {
            iconFile: '', 
            iconSize: 0,
            iconTemplates: [{
                name: '',
                iconIndex: 0,
                hue: 0,
                scale: 0,
                syncTransparency: false,
                syncDirection: false,
                blinkDuration: 0,
                minOpacity: 0,
            }],
            spriteTemplates: [{
                name: '',
                syncStepAnim: false,
                scale: 0,
                syncTransparency: false,
                syncDirection: false,
                blinkDuration: 0,
                minOpacity: 0,
            }],
            iconBitmapCache: [new Bitmap(1, 1)],
            templateArray: [],
            templateObj: {},
        },
    },
    alias: {},
    zoom: 1,
    markerData: {
        "-1": {},
    },
    displayObjects: {
        window: null,
        container: null,
        image: null,
        markersArray: [],
        markersObj: {},
        overlay: null,
    },
    cache: {
        minimapRect: new Rectangle(0, 0, 0, 0)
    },
    character: null,
    eventsCanRefreshMarker: false,
    
    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        const rawParams = PluginManager.parameters("Eli_MinimapPro")
        this.parameters.minimap = this.parseMinimapParameters(rawParams)
        this.parameters.minimap.mask = this.parseMaskParameters(this.parameters.minimap)
        this.parameters.minimap.win = this.parseWinParameters(this.parameters.minimap)
        this.parameters.minimap.background = this.parseBackgroundParameters(this.parameters.minimap)
        this.parameters.minimap.noiseFilter = this.parseNoiseFilterParameters(this.parameters.minimap)
        this.parameters.minimap.position = this.parsePositionParameters(this.parameters.minimap)

        this.parameters.fullMinimap = this.parseFullMinimapParameters(rawParams)
        this.parameters.fullMinimap.mask = this.parseMaskParameters(this.parameters.fullMinimap)
        this.parameters.fullMinimap.win = this.parseWinParameters(this.parameters.fullMinimap)
        this.parameters.fullMinimap.background = this.parseBackgroundParameters(this.parameters.fullMinimap)
        this.parameters.fullMinimap.sceneBackground = this.parseSceneBackgroundParameters(this.parameters.fullMinimap)
        this.parameters.fullMinimap.noiseFilter = this.parseNoiseFilterParameters(this.parameters.fullMinimap)
        this.parameters.fullMinimap.camera = this.parseCameraParameters(this.parameters.fullMinimap)
        this.parameters.fullMinimap.position = this.parsePositionParameters(this.parameters.fullMinimap)

        this.parameters.common = this.parseCommonParameters(rawParams)
        this.parameters.common.tilesetColors = this.parseTilesetColorParameters(this.parameters.common)
        this.parameters.common.tilesetColors.terrain = this.parseTilesetTerrainParameters(this.parameters.common.tilesetColors)
        this.parameters.common.tilesetColors.region = this.parseTilesetRegionParameters(this.parameters.common.tilesetColors)

        this.parameters.markers = this.parseMarkerParameters(rawParams)
        this.parameters.markers.iconTemplates = this.parseTemplateParameters(this.parameters.markers, "iconTemplates", "icon")
        this.parameters.markers.spriteTemplates = this.parseTemplateParameters(this.parameters.markers, "spriteTemplates", "sprite")
        
    },

    initPluginCommands(){
        // const commands = ['cmd_fullMinimap']
        // Eli.PluginManager.registerCommands(this, commands)
    },

    parseMinimapParameters(rawParams){
        const minimap = JSON.parse(rawParams.minimap)
        minimap.switch = Number(minimap.switch)
        minimap.commonEvent = Number(minimap.commonEvent)
        minimap.opacity = Number(minimap.opacity)

        return minimap
    },

    parseMaskParameters(minimap){
        const mask = JSON.parse(minimap.mask)
        mask.circleRadius = Number(mask.circleRadius)
        mask.height = Number(mask.height)
        mask.width = Number(mask.width)
        mask.roundedRectBorder = Number(mask.roundedRectBorder)
        mask.starEdges = Number(mask.starEdges)
        mask.starInnerRadius = Number(mask.starInnerRadius)
        mask.starOuterRadius = Number(mask.starOuterRadius)

        return mask
    },

    parseWinParameters(minimap){
        const win = JSON.parse(minimap.win)
        win.enable = win.enable === "true"
        win.pad = Number(win.pad)
        win.opacity = Number(win.opacity)
        win.backOpacity = Number(win.backOpacity)

        return win
    },

    parseBackgroundParameters(minimap){
        const background = JSON.parse(minimap.background)
        background.color = Eli.ColorManager.getHexOrName(background.color)
        background.opacity = Number(background.opacity)

        return background
    },

    parseNoiseFilterParameters(minimap){
        const noiseFilter = JSON.parse(minimap.noiseFilter)
        noiseFilter.dynamicSeed = noiseFilter.dynamicSeed === "true"
        noiseFilter.enable = noiseFilter.enable === "true"
        noiseFilter.seedTimer = Number(noiseFilter.seedTimer)

        return noiseFilter
    },

    parseCameraParameters(minimap){
        const camera = JSON.parse(minimap.camera)
        camera.moveSpeed = Number(camera.moveSpeed)
        camera.dashSpeed = Number(camera.dashSpeed)

        return camera
    },

    parsePositionParameters(minimap){
        const position = JSON.parse(minimap.position)
        position.offsetX = Number(position.offsetX)
        position.offsetY = Number(position.offsetY)

        return position
    },

    parseFullMinimapParameters(rawParams){
        const fullMinimap = JSON.parse(rawParams.fullMinimap)
        fullMinimap.opacity = Number(fullMinimap.opacity)

        return fullMinimap
    },

    parseSceneBackgroundParameters(minimap){
        const sceneBackground = JSON.parse(minimap.sceneBackground)
        sceneBackground.color = Eli.ColorManager.getHexOrName(sceneBackground.color)
        sceneBackground.opacity = Number(sceneBackground.opacity)

        return sceneBackground
    },

    parseCommonParameters(rawParams){
        const common = JSON.parse(rawParams.common)
        common.scrollLimit = common.scrollLimit === "true"
        common.tilesize = Number(common.tilesize)

        return common
    },

    parseTilesetColorParameters(common){
        const tilesetColors = JSON.parse(common.tilesetColors)
        const parseColor = Eli.ColorManager.getHexOrName.bind(Eli.ColorManager)
        tilesetColors.passable = parseColor(tilesetColors.passable)
        tilesetColors.impassable = parseColor(tilesetColors.impassable)
        tilesetColors.ladder = parseColor(tilesetColors.ladder)
        tilesetColors.bush = parseColor(tilesetColors.bush)
        tilesetColors.counter = parseColor(tilesetColors.counter)
        tilesetColors.damage = parseColor(tilesetColors.damage)

        delete tilesetColors.priority1
        delete tilesetColors.priority2
        delete tilesetColors.priority3
        delete tilesetColors.priority4

        return tilesetColors
    },

    parseTilesetTerrainParameters(tilesetColors){
        const terrain = JSON.parse(tilesetColors.terrain)
        const parseColor = Eli.ColorManager.getHexOrName.bind(Eli.ColorManager)
        terrain[0] = parseColor(terrain[0])
        terrain[1] = parseColor(terrain[1])
        terrain[2] = parseColor(terrain[2])
        terrain[3] = parseColor(terrain[3])
        terrain[4] = parseColor(terrain[4])
        terrain[5] = parseColor(terrain[5])
        terrain[6] = parseColor(terrain[6])
        terrain[7] = parseColor(terrain[7])

        return terrain
    },

    parseTilesetRegionParameters(tilesetColors){
        const regions = JSON.parse(tilesetColors.region)
        
        for(let i = 0; i < regions.length; i++){
            const region = JSON.parse(regions[i])
            region.id = Number(region.id)
            region.color = Eli.ColorManager.getHexOrName(region.color)
            regions[i] = region
        }

        return regions
    },

    parseMarkerParameters(rawParams){
        const markers = JSON.parse(rawParams.markers)

        markers.iconSize = Number(markers.iconSize)
        markers.templateArray = []
        markers.templateObj = {}

        return markers
    },

    parseTemplateParameters(markers, templateProp, type){
        const templates = JSON.parse(markers[templateProp])
        
        for(let i = 0; i < templates.length; i++){
            const template = JSON.parse(templates[i])
            template.blinkDuration = Number(template.blinkDuration) || 1
            template.hue = Number(template.hue) || 0
            template.iconIndex = Number(template.iconIndex) || 0
            template.minOpacity = Number(template.minOpacity)
            template.name = template.name.toLowerCase()
            template.scale = Number(template.scale)
            template.syncDirection = template.syncDirection === "true"
            template.syncStepAnim = template.syncStepAnim === "true"
            template.syncTransparency = template.syncTransparency === "true"
            template.type = type

            markers.templateArray.push(template)
            markers.templateObj[template.name] = template
            templates[i] = template
        }

        return templates
    },

    getZoom(){
        return this.zoom
    },

    getIcon(){
        return this.parameters.markers
    },

    createEmptyMarkerData(){
        return {
            blinkDuration: 1,
            hue: 0,
            iconIndex: 0,
            minOpacity: 255,
            name: '',
            scale: 0,
            syncDirection: false,
            syncStepAnim: false,
            syncTransparency: false,
            type: "none",
        }
    },

    processIconMarkerData(rawData){
        const [index, scale = "0.5", hue = "0", syncDirection = "false", syncTransparency = "true", blinkDuration = "1", minOpacity = "255"] = rawData
        //<MMIcon: iconIndex, scale, iconHue, syncDirection, syncTransparency, BlinkDuration, MinOpacity>
        return {
            blinkDuration: Number(blinkDuration),
            hue: Number(hue),
            iconIndex: Number(index),
            minOpacity: Number(minOpacity),
            name: '',
            scale: Number(scale),
            syncDirection: syncDirection === "true",
            syncStepAnim: false, // Sprite only
            syncTransparency: syncTransparency === "true", // if the marker will follow sprite transparency
            type: "icon",
        }
    },

    processSpriteMarkerData(rawData){
        const [scale = "1", syncStepAnim = "true", syncDirection = "true", syncTransparency = "true", blinkDuration = "1", minOpacity = "255"] = rawData
        //<MMSprite: zoom, syncStepAnim, syncDirection, syncTransparency, BlinkDuration, MinOpacity>
        return {
            blinkDuration: Number(blinkDuration),
            hue: 0, // Icon only
            iconIndex: 0, // Icon only
            minOpacity: Number(minOpacity),
            name: '',
            scale: Number(scale),
            syncDirection: syncDirection === "true",
            syncStepAnim: syncStepAnim === "true",
            syncTransparency: syncTransparency === "true", // if the marker will follow sprite transparency
            type: "sprite",
        }
    },

    findMarkerDataTemplate(templateName){
        return this.parameters.markers.templateObj[templateName.toLowerCase()] || this.createEmptyMarkerData()
    },

    isMinimapHidden(){
        const id = this.parameters.minimap.switch
        return $gameSwitches.value(id)
    },

    cmd_fullMinimap(){
        this.prepareMinimapScene()
    },

    prepareMinimapScene(){
        SceneManager._scene.winMinimap.hide()
        SoundManager.playOk()
        SceneManager.push(Scene_Minimap)
    },

    getMarkerSprite(id){
        return this.displayObjects.markersObj[id]
    }

}

const Alias = Eli.Minimap.alias
const Plugin = Eli.Minimap

Plugin.initialize()

/* ------------------------------ IMAGE MANAGER ----------------------------- */

ImageManager.loadMinimap = function(filename){
    return this.loadBitmap("img/minimap/", filename)
}

/* -------------------------------- SCENE MAP ------------------------------- */
{

Alias.Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects
Scene_Map.prototype.createDisplayObjects = function(){
    Alias.Scene_Map_createDisplayObjects.call(this)
    if($gameMap.hasMinimap()){
        this.createMinimap()
    }
}

Alias.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    if($gameMap.hasMinimap()){
        this.winMinimap.update()
        if(this.isMinimapClicked()){
            $gameTemp.reserveCommonEvent(Plugin.parameters.minimap.commonEvent)
        }
    }
    Alias.Scene_Map_update.call(this)
}

Alias.Scene_Map_isMapTouchOk = Scene_Map.prototype.isMapTouchOk
Scene_Map.prototype.isMapTouchOk = function() {
    return Alias.Scene_Map_isMapTouchOk.call(this) && !this.isMinimapClicked()
}

Alias.Scene_Map_terminate = Scene_Map.prototype.terminate
Scene_Map.prototype.terminate = function() {
    Plugin.eventsCanRefreshMarker = false
    Alias.Scene_Map_terminate.call(this)
}

Scene_Map.prototype.createMinimap = function(){
    Plugin.cache.minimapRect = this.createMinimapRect()
    Plugin.displayObjects.markersArray = []
    Plugin.displayObjects.markersObj = {}
    if(!Plugin.character || Plugin.character instanceof Sprite_FullMinimapCamera){
        Plugin.character = $gamePlayer
    }
    this.winMinimap = new Window_Minimap(Plugin.cache.minimapRect, Plugin.parameters.minimap)
    this.addChild(this.winMinimap)
}

Scene_Map.prototype.isMinimapClicked = function(){
    return  TouchInput.isTriggered() && this.winMinimap &&
            !Plugin.isMinimapHidden() &&
            Plugin.cache.minimapRect.contains(TouchInput._x, TouchInput._y)
}

Scene_Map.prototype.createMinimapRect = function(){
    const {width, height} = Plugin.parameters.minimap.mask
    const {alignX, alignY, offsetX, offsetY} = Plugin.parameters.minimap.position
    const pad = Plugin.parameters.minimap.win.pad * 2
    const x = Eli.Utils.calculateScreenPosition(alignX, offsetX, width + pad, "x")
    const y = Eli.Utils.calculateScreenPosition(alignY, offsetY, height + pad, "y")
    
    return new Rectangle(x, y, width + pad, height + pad)
}

}

/* -------------------------------- GAME MAP -------------------------------- */
{

Game_Map.prototype.getMinimapImage = function(){
    return Eli.String.removeSpaces($dataMap.meta.ImgMinimap || "")
}

Game_Map.prototype.hasMinimap = function(){
    return $dataMap.meta.hasOwnProperty(MAP_IMG_META) || $dataMap.meta.hasOwnProperty(MAP_TILE_META)
}

}

/* ------------------------------- GAME PARTY ------------------------------- */
{

Alias.Game_Party_setupStartingMembers = Game_Party.prototype.setupStartingMembers
Game_Party.prototype.setupStartingMembers = function() {
    Alias.Game_Party_setupStartingMembers.call(this)
    this.refreshLeaderMinimapMarker()
}

Alias.Game_Party_swapOrder = Game_Party.prototype.swapOrder
Game_Party.prototype.swapOrder = function(index1, index2) {
    Alias.Game_Party_swapOrder.call(this, index1, index2)
    this.refreshLeaderMinimapMarker()
}

Alias.Game_Party_addActor = Game_Party.prototype.addActor
Game_Party.prototype.addActor = function(actorId) {
    Alias.Game_Party_addActor.call(this, actorId)
    this.refreshLeaderMinimapMarker()
}

Alias.Game_Party_removeActor = Game_Party.prototype.removeActor
Game_Party.prototype.removeActor = function(actorId) {
    Alias.Game_Party_removeActor.call(this, actorId)
    this.refreshLeaderMinimapMarker()
}

Game_Party.prototype.refreshLeaderMinimapMarker = function() {
    const leader = $gameParty.leader()
    if(leader){
        const meta = leader.actor().meta
        const markerId = "-1"
        
        if(meta.MMIcon){
            Plugin.markerData[markerId] = this.createIconMinimapMarkerData(meta.MMIcon)
            
        }else if(meta.MMSprite){
            Plugin.markerData[markerId] = this.createSpriteMinimapMarkerData(meta.MMSprite)

        }else{
            Plugin.markerData[markerId] = Plugin.createEmptyMarkerData()
        }

        if(Plugin.getMarkerSprite(markerId) && Eli.Utils.isScene(Scene_Map)){
            Plugin.getMarkerSprite(markerId).refreshSettings()
        }
    }
}

Game_Party.prototype.createIconMinimapMarkerData = function(comment){
    const rawData = Eli.String.removeSpaces(comment).split(",")
    const templateName = rawData[0]

    if(isNaN(templateName)){
        return Plugin.findMarkerDataTemplate(templateName)
    }else{
        return Plugin.processIconMarkerData(rawData)
    }
}

Game_Party.prototype.createSpriteMinimapMarkerData = function(comment){
    const rawData = Eli.String.removeSpaces(comment).split(",")
    const templateName = rawData[0]

    if(isNaN(templateName)){
        return Plugin.findMarkerDataTemplate(templateName)
    }else{
        return Plugin.processSpriteMarkerData(rawData)
    }
}

}

/* ------------------------------- GAME PLAYER ------------------------------ */
{

Game_Player.prototype.getMinimapMarkerData = function(){
    return Plugin.markerData[this.getSpriteId()] || Plugin.createEmptyMarkerData()
}

Game_Player.prototype.setMinimapMarkerData = function(data){
    Plugin.markerData[this.getSpriteId()] = data
}
    
}

/* ------------------------------ GAME VEHICLE ------------------------------ */
{

Alias.Game_Vehicle_initialize = Game_Vehicle.prototype.initialize
Game_Vehicle.prototype.initialize = function(type) {
    Alias.Game_Vehicle_initialize.call(this, type)
    this.setMinimapMarkerData(Plugin.findMarkerDataTemplate(type))
}

Game_Vehicle.prototype.getMinimapMarkerData = function(){
    return Plugin.markerData[this.getSpriteId()]
}

Game_Vehicle.prototype.setMinimapMarkerData = function(data){
    Plugin.markerData[this.getSpriteId()] = data || Plugin.createEmptyMarkerData()
}
    
}

/* ------------------------------- GAME EVENT ------------------------------- */
{

Alias.Game_Event_afterSetupPage = Game_Event.prototype.afterSetupPage
Game_Event.prototype.afterSetupPage = function(){
    Alias.Game_Event_afterSetupPage.call(this)

    if(Plugin.eventsCanRefreshMarker){
        if(this.canSearchForMarkerData()){
            this.setMinimapMarkerByNote()
            this.needIterateList = true
        }
    }
}

Alias.Game_Event_onListIteration = Game_Event.prototype.onListIteration
Game_Event.prototype.onListIteration = function(index){
    const alias = Alias.Game_Event_onListIteration.call(this, index)
    const cmd = this.list()[index]

    if(cmd.code === 108 && Plugin.eventsCanRefreshMarker){
        this.searchCommentForMinimapMarker(cmd)
    }

    return alias
}

Alias.Game_Event_afterListIteration = Game_Event.prototype.afterListIteration
Game_Event.prototype.afterListIteration = function(){
    Alias.Game_Event_afterListIteration.call(this)
    if(Plugin.eventsCanRefreshMarker){
        this.refreshMinimapMarker()
    }
}

Game_Event.prototype.searchCommentForMinimapMarker = function(cmd){
    const comment = Eli.String.removeSpaces(cmd.parameters[0]).toLowerCase()
    const iconFlag = `<${ICON_TAG.toLowerCase()}:`
    const spriteFlag = `<${SPRITE_TAG.toLowerCase()}:`

    if(comment.includes(iconFlag)){
        const data = this.createIconMinimapMarkerData(iconFlag, comment)
        this.setMinimapMarkerData(data)

    }else if(comment.includes(spriteFlag)){
        const data = this.createSpriteMinimapMarkerData(spriteFlag, comment)
        this.setMinimapMarkerData(data)
    }
}

Game_Event.prototype.canSearchForMarkerData = function(){
    return Plugin.markerData[this.getSpriteId()][this._pageIndex].needIteration
}

Game_Event.prototype.createMinimapMarkerData = function(){
    const id = this.eventId()
    if(!Plugin.markerData.hasOwnProperty(id)){
        Plugin.markerData[id] = {}

        for(let i = -2; i <= this.event().pages.length; i++){
            if(id === 10){
                console.log(i)
            }
            Plugin.markerData[id][i] = {
                data: Plugin.createEmptyMarkerData(), 
                needIteration: true
            }
        }
    }
}

Game_Event.prototype.setMinimapMarkerByNote = function(){
    const note = Eli.String.removeSpaces(this.event().note.toLowerCase())
    const iconFlag = `<${ICON_TAG.toLowerCase()}:`
    const spriteFlag = `<${SPRITE_TAG.toLowerCase()}:`

    if(note.includes(iconFlag)){
        const data = this.createIconMinimapMarkerData(iconFlag, note)
        this.setMinimapMarkerData(data)

    }else if(note.includes(spriteFlag)){
        const data = this.createIconMinimapMarkerData(spriteFlag, note)
        this.setMinimapMarkerData(data)
    }
}

Game_Event.prototype.extractMinimapMarkerString = function(flag, str){
    const start = str.indexOf(flag) + flag.length
    const subData = str.substring(start)
    const end = subData.indexOf(">")
    const comment = subData.substring(0, end)

    return comment
}

Game_Event.prototype.createIconMinimapMarkerData = function(flag, comment){
    const markerString = this.extractMinimapMarkerString(flag, comment)
    const rawData = markerString.split(",")
    const templateName = rawData[0]

    if(isNaN(templateName)){
        return Plugin.findMarkerDataTemplate(templateName)
    }else{
        return Plugin.processIconMarkerData(rawData)
    }
}

Game_Event.prototype.createSpriteMinimapMarkerData = function(flag, comment){
    const markerString = this.extractMinimapMarkerString(flag, comment)
    const rawData = markerString.split(",")
    const templateName = rawData[0]

    if(isNaN(templateName)){
        return Plugin.findMarkerDataTemplate(templateName)
    }else{
        return Plugin.processSpriteMarkerData(rawData)
    }
}

Game_Event.prototype.getMinimapMarkerData = function(){
    return Plugin.markerData[this.eventId()][this._pageIndex].data
}

Game_Event.prototype.setMinimapMarkerData = function(data){
    Plugin.markerData[this.eventId()][this._pageIndex].data = data
}

Game_Event.prototype.refreshMinimapMarker = function(){
    const id = this.getSpriteId()
    Plugin.markerData[id][this._pageIndex].needIteration = false
    if(Plugin.getMarkerSprite(id)){
        Plugin.getMarkerSprite(id).refreshSettings()
    }
}

}

/* ---------------------------- GAME INTERPRETER ---------------------------- */
{

Alias.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args){
    Alias.Game_Interpreter_pluginCommand.call(this, command, args)
    if(command.toUpperCase() === "OPENMINIMAP"){
        Plugin.cmd_fullMinimap()
    }
}

}

}