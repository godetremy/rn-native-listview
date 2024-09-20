package expo.modules.rnnativelistview

import android.content.Context
import android.view.View
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.ListItem
import androidx.compose.material3.MaterialTheme
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.viewinterop.AndroidView
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

// List of strings to display in the list view
val languages = listOf("Android", "iOS", "Java", "Kotlin", "Swift", "Objective-C", "Dart", "Flutter")

class RNNativeListviewView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
    var items: List<android.view.View> = emptyList()
    init {
        val composeView = ComposeView(context)
        composeView.setContent {
            MaterialTheme {
                Column(
                    modifier = Modifier
                        .height(IntrinsicSize.Max)
                        .verticalScroll(rememberScrollState())
                ) {
                    items.forEach { item ->
                        ListItem(
                            headlineContent = {
                                AndroidView(factory = { item }) { view ->
                                    addView(view)
                                }
                            },
                            modifier = Modifier
                                .clickable { },
                        )
                        HorizontalDivider()
                    }
                }
            }
        }

        addView(composeView, LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT))
    }

    override fun addView(child: View?, index: Int) {
        items += child!!
    }
}