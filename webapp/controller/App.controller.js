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

                // Set JSON Model
                this._setGlobalModel();

                /*
                let oData = {
                    
                };
                
                 
                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(oData);
                this.getView().setModel(oModel,"oBankDetails");
                */

                // Checking browser language & Setting Language
                this._setGlobalLanguage();

                let profileModel = new sap.ui.model.json.JSONModel(
                    {
                        profile: sap.ui.require.toUrl("com/sap/mybankdetails/images/Profile.jpg")
                    }
                );
                this.getView().setModel(profileModel);


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
            },

            _setGlobalModel: function () {
                let oModel = this.getOwnerComponent().getModel("oBankDetails");
                this.getView().setModel(oModel);

            },
            _setGlobalLanguage: function () {
                // Checking the browser language and setting the global resource model
                var appLang;

                if (navigator.language == 'es')
                    appLang = "i18n_es";
                else if (navigator.language == 'en')
                    appLang = "i18n";
                else
                    appLang = "i18n";

                var i18nes = this.getOwnerComponent().getModel(appLang)
                this.getOwnerComponent().setModel(i18nes, "i18n")
            }

        });
    });
