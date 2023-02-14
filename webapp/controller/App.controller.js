sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.mybankdetails.controller.App", {
            onInit: function () {
                // alert('This is Inside Init Function')
                // debugger

                // Checking the browser language and setting the global resource model
                var appLang;

                if(navigator.language == 'es')
                    appLang = "i18n_es";                                    
                else if(navigator.language == 'en')
                    appLang = "i18n";                
                else
                    appLang = "i18n";                

                var i18nes = this.getOwnerComponent().getModel(appLang)
                this.getOwnerComponent().setModel(i18nes,"i18n")
            },

            onOpenBankDetails: function () {
                // Create Dialog Lazy
                if (!this.morebankdetails) {
                    this.morebankdetails = this.loadFragment(
                        { name: "com.sap.mybankdetails.view.fragments.MoreDetails" }
                    );
                }

                this.morebankdetails.then(
                    function (oDialog) {
                        oDialog.open();
                    }
                );
            },

            onCloseBankDetails: function () {
                this.byId("morebankdetails").close();
            }
        });
    });
