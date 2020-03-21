import { GlossaryItem, LoadGlossaryItems, GlossaryActionTypes } from "./types";

function loadGlossary(items: GlossaryItem[]): LoadGlossaryItems {
  return {
    type: GlossaryActionTypes.LOAD_GLOSSARY_ITEMS,
    payload: items,
  }
}

export default {
  loadGlossary,
}
