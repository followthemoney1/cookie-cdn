import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    theme: 'dark-turquoise',
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    onAccept: ({cookie}) => {
        console.log('Cookies accepted:', cookie);
        
        let consentUpdate = {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied'
        };
    
        if (cookie.categories.includes('analytics')) {
          consentUpdate.analytics_storage = 'granted';
        }
    
        if (cookie.categories.includes('ads')) {
          consentUpdate.ad_storage = 'granted';
          consentUpdate.ad_user_data = 'granted';
          consentUpdate.ad_personalization = 'granted';
        }
    
        // Update Google Analytics consent
        gtag('consent', 'update', consentUpdate);
      },    
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello king, it's cookie time!",
                    description: "Our platfomr uses cookies toBy continuing to use Porada, you consent to our use of cookies in accordance with this description and our full Cookie Policy, which provides more detailed information about our practices",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"https://www.porada.app/privacy-policy\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Provides a general overview of cookie usage, explaining the purpose and benefits of cookies in a user-friendly manner"
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Describes the essential nature of these cookies, which are necessary for the website to function properly",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "Explains the role of functionality cookies in enhancing user experience by remembering user preferences and settings",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Details how analytics cookies are used to collect information about how users interact with the website, helping to improve the website's performance",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Advertisement Cookies",
                            description: "Describes the use of advertisement cookies in delivering targeted ads and measuring the effectiveness of advertising campaigns ",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "More information",
                            description: "Provides additional information and a contact link for users who have queries regarding the cookie policy and their choices "
                        }
                    ]
                }
            }
        }
    }
});