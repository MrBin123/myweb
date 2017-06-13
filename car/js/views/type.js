var app = require('../tpls/lookfor.string');
var findTop = require('../tpls/lookfor_top.string');
var findCenter = require('../tpls/lookfor_center.string');
var commonUtil = require('../utils/common')

commonUtil.renderBody(app);
commonUtil.render("#lookfor_top",findTop)
commonUtil.render("#lookfor_center",findCenter)

