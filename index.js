/**
 * @file mofron-comp-btninput/index.js
 * @brief button input component for mofron
 *        input with button component
 * @author simpart
 */
const mf = require("mofron");
const Input = require("mofron-comp-input");
const Button = require("mofron-comp-button");

mf.comp.BtnInput = class extends Input {
    /**
     * initialize component
     * 
     * @param (string/object) string: "btnText" parameter
     *                        object: component option
     * @pmap btnText,clickEvent
     * @type private
     */
    constructor (po,p2) {
        try {
            super();
            this.name("BtnInput");
            this.prmMap(["btnText", "clickEvent"]);
            this.prmOpt(po,p2);
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
            this.target().parent().style({ 'display': 'flex' });
            this.child(this.button());
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
        try { return this.innerComp("button", prm, Button); } catch (e) {
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
        try { return this.button().clickEvent(func,prm); } catch (e) {
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
    btnText (prm) {
        try { return this.button().text(prm); } catch (e) {
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
            if (undefined !== prm) {
                try {
                    this.button().height(mf.func.sizeSum(prm, "0.06rem"));
                } catch (e) {
                    this.button().height(prm);
                }
            }
            return super.height(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.BtnInput;
/* end of file */
