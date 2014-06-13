({
			
	testActionString : {
		mocks : [{
		    type : "ACTION",
			stubs : [{
                                method : { name : "getString" },
                                answers : [
                                           {
                                        	   value : "answer from server1"
                                           }, 
                                           {
                                        	   value : "answer from server2"
                                           }
                                ]
                     }]
		}],
		test : [function(cmp) {
			cmp.find("trigger").get("e.press").fire();
			$A.test.addWaitFor(true, function(){return "default value" != $A.test.getText(cmp.find("output").getElement())});
		}, function(cmp) {
			$A.test.assertEquals("answer from server1", $A.test.getText(cmp.find("output").getElement()));
			
			cmp.find("trigger").get("e.press").fire();
			$A.test.addWaitFor(true, function(){return "answer from server1" != $A.test.getText(cmp.find("output").getElement())});
		}, function(cmp) {
			$A.test.assertEquals("answer from server2", $A.test.getText(cmp.find("output").getElement()));
		}
		]
	},
	
})
