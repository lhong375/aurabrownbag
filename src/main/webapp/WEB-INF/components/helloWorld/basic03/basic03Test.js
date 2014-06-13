({ 
	testModelPropertiesCaseMocks : {
		mocks : [{
    		type : "MODEL",
			stubs : [{
				answers : [{
					value : {
						secret : { value : "new secret from server" } ,
					},
				}]
			}]                   
		}],
		test : function(cmp) {
			$A.test.assertEquals("new secret from server", $A.test.getText(cmp.find("output").getElement()));
		}
	},
})