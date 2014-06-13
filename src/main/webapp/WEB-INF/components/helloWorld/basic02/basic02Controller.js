({
	getServerString : function(cmp){
		var a = cmp.get("c.getString");
		a.setParams({param : "" + new Date()});
		a.setCallback(cmp, function(action){
			cmp.set("v.stringAttribute", action.getReturnValue());
		});
        $A.enqueueAction(a);
	}
})
