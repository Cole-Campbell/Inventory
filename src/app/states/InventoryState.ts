import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Item } from "../models/item.model";
import { AddItem, RemoveItem } from "../actions/inventory.actions";

export class InventoryStateModel {
  inventory: Item[];
}

@State<InventoryStateModel>({
  name: "Inventory",
  defaults: {
    inventory: []
  }
})
export class InventoryState {
  @Selector()
  static getInventory(state: InventoryStateModel) {
    return state.inventory;
  }

  @Action(AddItem)
  add(
    { getState, patchState }: StateContext<InventoryStateModel>,
    { payload }: AddItem
  ) {
    const state = getState();
    patchState({
      inventory: [...state.inventory, payload]
    });
  }

  @Action(RemoveItem)
  remove(
    { getState, patchState }: StateContext<InventoryStateModel>,
    { payload }: RemoveItem
  ) {
    patchState({
      inventory: getState().inventory.filter(item => item !== payload)
    });
  }
}
