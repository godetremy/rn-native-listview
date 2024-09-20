import ExpoModulesCore
import UIKit
import React

class RNNativeListviewView: ExpoView, UITableViewDataSource {
	private var tableView: UITableView
	var items: [UIView] = []
	
	required init(appContext: AppContext? = nil) {
		tableView = UITableView(frame: .zero, style: .plain)
		
		super.init(appContext: appContext)

		tableView.dataSource = self
		tableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")

		addSubview(tableView)
	}
	
	override func layoutSubviews() {
		super.layoutSubviews()
		tableView.frame = bounds
	}
	
	override func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
		items.append(subview)
		tableView.reloadData()
	}
	
	override func removeReactSubview(_ subview: UIView!) {
		items.removeAll()
		tableView.reloadData()
	}
	
	func updateTableViewStyle(style: UITableView.Style) {
		tableView.removeFromSuperview()
		
		tableView = UITableView(frame: .zero, style: style)
		
		tableView.dataSource = self
		tableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
		
		addSubview(tableView)
		
		setNeedsLayout()
		layoutIfNeeded()
	}
	
	// MARK: - UITableViewDataSource
	
	func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
		return items.count
	}
	
	func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
		let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
		
		let item = items[indexPath.row]
		item.frame = cell.contentView.bounds
		
		cell.contentView.addSubview(item)
		return cell
	}
}
