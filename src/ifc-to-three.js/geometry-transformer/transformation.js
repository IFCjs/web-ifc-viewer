import { trackLocalTransform } from "./local-transform-tracker.js";
import { applyTransforms } from "./local-transform-applier.js";
import {
  defaultValue as def,
  namedProps as n,
  structuredData as s,
  typeValue as t,
} from "../../utils/global-constants.js";

function applyTransformations(structured) {
  structured[s.products].forEach((product) => {
    applyTransform(product);
  });
}

function applyTransform(product) {
  getTransform(product, getPlacement(product));
  applyTransforms(product, n.transform);

  if (product[n.openings])
    product[n.openings].forEach((opening) => {
      getTransform(opening, getPlacement(opening));
      applyTransforms(opening, n.transform);
      rectifyOpeningRotation(opening);
    });
}

function rectifyOpeningRotation(opening) {
  opening[n.geometry].forEach((geometry) => {
    // geometry.rotation.x -= Math.PI / 2;
  });
}

//Gets all the transforms (local origins) recursively

function getTransform(product, objPlacement) {
  try {
    const placement = objPlacement[n.relativePlacement][t.value];
    trackLocalTransform(product, placement, n.transform);
    if (objPlacement[n.placementRelTo][t.value] != def) {
      getTransform(product, objPlacement[n.placementRelTo][t.value]);
    }
  } catch (e) {
    console.warn(e);
  }
}

function getPlacement(product) {
  try {
    return product[n.objectPlacement][t.value];
  } catch (e) {
    console.warn(e);
  }
}

export { applyTransformations };
