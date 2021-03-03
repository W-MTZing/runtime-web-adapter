import _UTIL from "../util";
import _FEATURE from "../feature";

if (!window.ral) {
    window.ral = {};
}
// base
require("./base/lifecycle");
require("./base/subpackage");
require("./base/system-info");
require("./base/touch-event");
// device
require("./device/accelerometer");
require("./device/battery");
// file
require("./file/file-system-manager");
// interface
require("./interface/keyboard");
require("./interface/window");
// media
require("./media/audio");
require("./media/video");
// network
require("./network/download");
// rendering
require("./rendering/canvas");
require("./rendering/webgl");
require("./rendering/font");
require("./rendering/frame");
require("./rendering/image");
// other
_UTIL.exportTo("getFeatureProperty", _FEATURE, ral);