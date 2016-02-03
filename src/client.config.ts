import UiPlugin from './modules/ui/ui.plugin.ts';
import InfoPlugin from './modules/info/info.plugin.ts';
import LearningPlugin from './modules/learning/learning.plugin.ts';

export default {
    plugins: [
        {
            pluginConstructor: UiPlugin
        },
        {
            pluginConstructor: InfoPlugin
        }
        ,
        {
            pluginConstructor: LearningPlugin
        }
    ]
}