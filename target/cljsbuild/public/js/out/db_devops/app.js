// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.app');
goog.require('cljs.core');
goog.require('db_devops.core');
goog.require('devtools.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),db_devops.core.mount_components);
devtools.core.install_BANG_.call(null);
db_devops.core.init_BANG_.call(null);

//# sourceMappingURL=app.js.map