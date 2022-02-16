function mdmApplyPageSettings(e) {
    apex.debug.warn("WARNING: function mdmApplyPageSettings will be deprecated. Please use: mdm.pageSettings.applyOnLoad"),
    mdm.pageSettings.applyOnLoad(e)
}
var mdm = mdm || {};
mdm.pageSettings = [{}],
mdm.pageSettings.current = [{}],
mdm.pageSettings = {
    applyOnLoad: function(e) {
        apex.debug.info("calling mdm.pageSettings.applyOnLoad"),
        apex.debug.info("Getting JSON settings for page " + e),
        apex.server.process("getPageSettings", { // an application process
            x01: e
        }, {
            success: function(e) {
                apex.debug.info("JSON output:", e);
                for (let i of e)
                    apex.debug.info("Evaluate if item should be mandatory"),
                    apex.debug.info("evaluating ", i),
                    apex.debug.info("check type === item", "item" === i.type),
                    apex.debug.info("check hidden ", i.hidden),
                    apex.debug.info("check required ", i.required),
                    document.getElementById(i.id + "_CONTAINER") && "item" === i.type && "false" === i.hidden && "true" === i.required ? (apex.debug.info(i.id, "is required."),
                    document.getElementById(i.id + "_CONTAINER").classList.add("is-required")) : (apex.debug.info("Maybe it is conditional mandatory"),
                    apex.debug.info("check required_item ", i.required_item, apex.item(i.required_item).getValue()),
                    apex.debug.info("check required_condition ", i.required_condition === apex.item(i.required_item).getValue()),
                    document.getElementById(i.id + "_CONTAINER") && "item" === i.type && "false" === i.hidden && "conditional" === i.required && i.required_condition === apex.item(i.required_item).getValue() && (apex.debug.info(i.id, "is required."),
                    document.getElementById(i.id + "_CONTAINER").classList.add("is-required")));
                mdm.pageSettings.current = e
            },
            error: function(i) {
                apex.debug.error("Error getting JSON settings for page " + e),
                apex.debug.error("JSON output:", i)
            }
        })
    },
    applyConditionalMandatory: function(e, i) {
        apex.debug.info("calling mdm.pageSettings.applyConditionalMandatory"),
        apex.debug.info("parameters: ", e, i);
        for (let e of mdm.pageSettings.current)
            apex.debug.info("evaluating ", e),
            apex.debug.info("check type ", "item" === e.type),
            apex.debug.info("check hidden ", "false" === e.hidden),
            apex.debug.info("check required ", "conditional" === e.required),
            apex.debug.info("check id ", e.id === i),
            apex.debug.info("check required_item ", e.required_item, apex.item(e.required_item).getValue()),
            apex.debug.info("check required_condition ", e.required_condition === apex.item(e.required_item).getValue()),
            document.getElementById(e.id + "_CONTAINER") && "item" === e.type && "false" === e.hidden && "conditional" === e.required && e.id === i && e.required_condition === apex.item(e.required_item).getValue() && (apex.debug.info(e.id, "is required."),
            document.getElementById(e.id + "_CONTAINER").classList.add("is-required"))
    }
};
