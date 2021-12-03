/**
 * @file mofron-comp-btninput/index.js
 * @brief button input component for mofron
 *        input with button component
 * @author simpart
 */
const Input = require("mofron-comp-input");
const Button = require("mofron-comp-button");
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (string/object) string: "bText" parameter
     *                        object: component option
     * @short bText,clickEvent
     * @type private
     */
    constructor (po,p2) {
        try {
            super();
            this.modname("BtnInput");
            this.shortForm("bText", "clickEvent");
            
            if (0 < arguments.length) {
                this.config(po,p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.style({
	        'display':'flex',
            });
            this.child([
	        this.input(),this.button()
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * buttom component
     * 
     * @param (mofron-comp-button) button component
     * @return (mofron-comp-button) button component
     * @type parameter
     */
    button (prm) {
        try {
	    return this.innerComp("button", prm, Button);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * input component setter/getter
     * 
     * @param (mofron-comp-input) input component
     * @return (mofron-comp-input) input component
     * @type parameter
     */
    input (prm) {
        try {
            return this.innerComp("input", prm, Input);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * button click event
     * 
     * @param (function) click event function
     * @param (mixed) function parameter
     * @return (array) [[function, parameter], ...]
     * @return (null) not set
     * @type parameter
     */
    clickEvent (func, prm) {
        try {
	    return this.button().clickEvent(func,prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text contents
     * 
     * @param (string) input text contents
     * @param (string) button text contents
     * @return (string) input text contents
     * @type parameter
     */
    text (p1,p2) {
        try {
            this.bText(p2);
	    return this.input().text(p1);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * button text contents
     *
     * @param (string) button text contents
     * @reutnr (string) button text contents
     * @type parameter
     */
    bText (prm) {
        try {
	    return this.button().text(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * input and button height
     *
     * @param (string (size)) height size
     * @return (string (size)) height size
     * @type parameter
     */
    height (prm) {
        try {
            this.child()[0].height(prm);
	    return this.child()[1].height(comutl.sizediff(prm,"0.01rem"));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
