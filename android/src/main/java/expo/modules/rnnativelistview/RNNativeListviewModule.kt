package expo.modules.rnnativelistview

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class RNNativeListviewModule : Module() {
  override fun definition() = ModuleDefinition {

    Name("RNNativeListview")

    View(RNNativeListviewView::class) {
    }
  }
}
