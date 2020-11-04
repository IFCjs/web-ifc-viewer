import { parser } from "../parser/parser.js";
import { typesParserMap } from "../parser/parser-map.js";
import { newSemantic } from "./semantic-factory.js";
import { ifcTypes as t } from "../utils/ifc-types.js";

const BaseVisitor = parser.getBaseCstVisitorConstructor();

class IfcVisitor extends BaseVisitor {
  constructor() {
    super();
    this.validateVisitor();
  }

  //Spatial structure elements

  IfcProject(parsed) {
    return getSemantic(t.IfcProject, parsed);
  }

  IfcSite(parsed) {
    return getSemantic(t.IfcSite, parsed);
  }

  IfcBuilding(parsed) {
    return getSemantic(t.IfcBuilding, parsed);
  }

  IfcBuildingStorey(parsed) {
    return getSemantic(t.IfcBuildingStorey, parsed);
  }

  IfcSpace(parsed) {
    return getSemantic(t.IfcSpace, parsed);
  }

  //Geometry

  IfcDirection(parsed) {
    return getSemantic(t.IfcDirection, parsed);
  }

  IfcCartesianPoint(parsed) {
    return getSemantic(t.IfcCartesianPoint, parsed);
  }

  IfcAxis2Placement3D(parsed) {
    return getSemantic(t.IfcAxis2Placement3D, parsed);
  }

  IfcAxis2Placement2D(parsed) {
    return getSemantic(t.IfcAxis2Placement2D, parsed);
  }

  IfcPolyline(parsed) {
    return getSemantic(t.IfcPolyline, parsed);
  }

  //Units

  IfcUnitAssignment(parsed) {
    return getSemantic(t.IfcUnitAssignment, parsed);
  }

  IfcSIUnit(parsed) {
    return getSemantic(t.IfcSIUnit, parsed);
  }

  IfcDerivedUnit(parsed) {
    return getSemantic(t.IfcDerivedUnit, parsed);
  }

  IfcDerivedUnitElement(parsed) {
    return getSemantic(t.IfcDerivedUnitElement, parsed);
  }

  IfcMeasureWithUnit(parsed) {
    return getSemantic(t.IfcMeasureWithUnit, parsed);
  }

  IfcDimensionalExponents(parsed) {
    return getSemantic(t.IfcDimensionalExponents, parsed);
  }

  IfcConversionBasedUnit(parsed) {
    return getSemantic(t.IfcConversionBasedUnit, parsed);
  }

  //Contexts

  IfcGeometricRepresentationContext(parsed) {
    return getSemantic(t.IfcGeometricRepresentationContext, parsed);
  }

  IfcGeometricRepresentationSubContext(parsed) {
    return getSemantic(t.IfcGeometricRepresentationSubContext, parsed);
  }

  IfcLinearPlacement(parsed) {
    return getSemantic(t.IfcLinearPlacement, parsed);
  }

  IfcGridPlacement(parsed) {
    return getSemantic(t.IfcGridPlacement, parsed);
  }

  IfcLocalPlacement(parsed) {
    return getSemantic(t.IfcLocalPlacement, parsed);
  }

  //Identities

  IfcOrganization(parsed) {
    return getSemantic(t.IfcOrganization, parsed);
  }

  IfcApplication(parsed) {
    return getSemantic(t.IfcApplication, parsed);
  }

  IfcOwnerHistory(parsed) {
    return getSemantic(t.IfcOwnerHistory, parsed);
  }

  IfcPerson(parsed) {
    return getSemantic(t.IfcPerson, parsed);
  }

  IfcPersonAndOrganization(parsed) {
    return getSemantic(t.IfcPersonAndOrganization, parsed);
  }

  IfcPostalAddress(parsed) {
    return getSemantic(t.IfcPostalAddress, parsed);
  }

  //Relationships

  IfcRelAggregates(parsed) {
    return getSemantic(t.IfcRelAggregates, parsed);
  }

  IfcRelContainedInSpatialStructure(parsed) {
    return getSemantic(t.IfcRelContainedInSpatialStructure, parsed);
  }

  //Building elements

  IfcWallStandardCase(parsed) {
    return getSemantic(t.IfcWallStandardCase, parsed);
  }

  _IfcGuid(parsed) {}
  _Number(parsed) {}
  _IdSet(parsed) {}
  _IfcText(parsed) {}
  _IfcEnum(parsed) {}
  _IfcExpressId(parsed) {}
  _NumberSet(parsed) {}
  _Asterisk(parsed) {}
  _IfcValue(parsed) {}
  _TextSet(parsed) {}
}

function getSemantic(ifcType, parsed) {
  const ifcItem = typesParserMap[ifcType];
  return newSemantic(parsed, ifcItem.item, ifcItem.name);
}

const ifcVisitor = new IfcVisitor();

export { ifcVisitor };
