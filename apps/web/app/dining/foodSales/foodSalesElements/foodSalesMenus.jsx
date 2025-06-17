import foodMenus from "../../../foodSales.mock.json" assert {type: "json"};
import programs from "../../../program.mock.json" assert {type: "json"};

export function foodSalesMenu() {
  const fullFoodMenus = foodMenus.map(item => {
    return {
      teamId: item.id,
      team: programs.find(pItem => pItem.id == item.id).team,
      name: programs.find(pItem => pItem.id == item.id).name,
      menus: item.menus
    }
  });

  return fullFoodMenus;
}