import { tokens } from "../lexer/lexer.js";
import { addPrimitiveParsers } from "./parser-primitives.js";
import { typesParserMap } from "./parser-map.js";
import { newParser } from "./parser-factory.js";
import { namedProps as n } from "../../utils/global-constants.js";
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'chevrotain'.
const CstParser = chevrotain.CstParser;
//Contains all the syntactical structures (RULEs)
class IfcParser extends CstParser {
    performSelfAnalysis: any;
    constructor() {
        super(tokens);
        addPrimitiveParsers(this);
        addParsesForAllIfcTypes(this);
        this.performSelfAnalysis();
    }
}
//Creates the syntactical structures (RULEs) for all the IFC Classes
function addParsesForAllIfcTypes($: any) {
    Object.values(typesParserMap).forEach((e) => {
        $.RULE((e as any)[n.ifcClass], () => {
            newParser($, e);
        });
    });
}
const parser = new IfcParser();
export { parser };
