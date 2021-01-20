import { trackLocalTransform } from './local-transform-tracker.js';
import { applyTransforms } from './local-transform-applier.js';
import {
  defaultValue as def,
  namedProps as n,
  structuredData as s
} from '../../utils/global-constants.js';
function applyTransformations(structured: any) {
  structured[s.products].forEach((product: any) => {
    applyTransform(product);
  });
}

function applyTransform(product: any) {
  getTransforms(product, getPlacement(product));
  applyTransforms(product, n.transform);
  applyTransformToItems(product[n.hasOpenings]);
  applyTransformToItems(product[n.hasSpatial]);
}

function applyTransformToItems(items: any) {
  if (items)
    items.forEach((item: any) => {
      getTransforms(item, getPlacement(item));
      applyTransforms(item, n.transform);
    });
}

//Gets all the transforms (local origins) recursively
function getTransforms(product: any, objPlacement: any) {
  try {
    const placement = objPlacement[n.relativePlacement];
    trackLocalTransform(product, placement, n.transform);
    if (objPlacement[n.placementRelTo] != def)
      getTransforms(product, objPlacement[n.placementRelTo]);
  } catch (e) {
    console.warn(e);
  }
}

function getPlacement(product: any) {
  try {
    return product[n.objectPlacement];
  } catch (e) {
    console.warn(e);
  }
}

export { applyTransformations };
