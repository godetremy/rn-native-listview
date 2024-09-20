import ExpoModulesCore
import React

public class RNNativeListviewModule: Module {
	public func definition() -> ModuleDefinition {
		Name("RNNativeListview")
		
		View(RNNativeListviewView.self) {
			Prop("list_style", {(view: RNNativeListviewView, prop: String) in
				var style: UITableView.Style = .plain
				if (prop == "insetGrouped") {
					style = .insetGrouped
				} else if (prop == "grouped") {
					style = .grouped
				} else if (prop == "plain") {
					style = .plain
				}
				view.updateTableViewStyle(style: style)
			})
		}
	}
}
