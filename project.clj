(defproject db-devops "0.1.0"

  :description "A web app for DB DevOps."
  :url "https://github.com/hughjfchen/db-devops"

  :dependencies [[ring/ring-core "1.6.1"]
		 [bouncer "1.0.1"]
                 [buddy "1.3.0"]
                 [cljs-ajax "0.6.0"]
                 [cljsjs/bootstrap "3.3.6-1"]
                 [cljsjs/react-bootstrap "0.30.7-0"]
                 [cljsjs/react-bootstrap-datetimepicker "0.0.22-0"
                  :exclusions [org.webjars.bower/jquery]]
                 [cljsjs/react-select "1.0.0-rc.3"]
                 [cljsjs/showdown "1.4.2-0"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [compojure "1.6.0"]
                 [conman "0.6.3"]
                 [cprop "0.1.10"]
                 [funcool/cuerdas "2.0.3"]
                 [luminus-immutant "0.2.3"]
                 [luminus-migrations "0.3.3"]
                 [luminus-nrepl "0.1.4"]
                 [metosin/compojure-api "1.1.10"]
                 [metosin/ring-http-response "0.9.0"]
                 [mount "0.1.11"]
                 [org.clojars.pntblnk/clj-ldap "0.0.12"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.542" :scope "provided"]
                 [org.clojure/tools.cli "0.3.5"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.postgresql/postgresql "42.1.1"]
                 [org.webjars.bower/tether "1.4.0"]
                 [org.webjars/bootstrap "3.3.6"]
                 [org.webjars/font-awesome "4.7.0"]
                 [org.webjars/webjars-locator-jboss-vfs "0.1.0"]
                 [re-com "2.0.0"]
                 [re-frame "0.9.3"]
                 [reagent "0.6.1"]
                 ;[reagent-utils "0.2.1"]
                 [ring-middleware-format "0.7.2"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-defaults "0.3.0"]
                 [secretary "1.2.3"]
                 [selmer "1.10.7"]
                 [venantius/accountant "0.2.0"]]

  :min-lein-version "2.0.0"

  :jvm-opts ["-server" "-Dconf=.lein-env"]
  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]
  :target-path "target/%s/"
  :main ^:skip-aot db-devops.core
  :migratus {:store :database :db ~(get (System/getenv) "DATABASE_URL")}

  :plugins [[lein-cprop "1.0.1"]
            [migratus-lein "0.4.1"]
            [lein-cljsbuild "1.1.3"]
            [lein-immutant "2.1.0"]]
  :clean-targets ^{:protect false}
  [:target-path [:cljsbuild :builds :app :compiler :output-dir] [:cljsbuild :builds :app :compiler :output-to]]
  :figwheel
  {:http-server-root "public"
   :nrepl-port 7002
   :css-dirs ["resources/public/css"]
   :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}


  :profiles
  {:uberjar {:omit-source true
             :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
             :cljsbuild
             {:builds
              {:min
               {:source-paths ["src/cljc" "src/cljs" "env/prod/cljs"]
                :compiler
                {:output-to "target/cljsbuild/public/js/app.js"
                 :externs ["react/externs/react.js"
                           "public/js/simplemde.min.js"
                           "public/js/hljs.js"]
                 :optimizations :advanced
                 :pretty-print false
                 :closure-warnings
                 {:externs-validation :off :non-standard-jsdoc :off}}}}}


             :aot :all
             :uberjar-name "db-devops.jar"
             :source-paths ["env/prod/clj"]
             :resource-paths ["env/prod/resources"]}

   :dev           [:project/dev :profiles/dev]
   :test          [:project/test :profiles/test]

   :project/dev  {:dependencies [[binaryage/devtools "0.9.4"]
                                 [com.cemerick/piggieback "0.2.1"]
                                 [doo "0.1.7"]
                                 [figwheel-sidecar "0.5.10"]
                                 [pjstadig/humane-test-output "0.8.1"]
                                 [prone "1.1.4"]
                                 [ring/ring-devel "1.6.1"]
                                 [ring/ring-mock "0.3.0"]]
                  :plugins      [[com.jakemccrary/lein-test-refresh "0.14.0"]
                                 [lein-doo "0.1.7"]
                                 [lein-figwheel "0.5.10"]
                                 [org.clojure/clojurescript "1.9.542"]]
                  :cljsbuild
                  {:builds
                   {:app
                    {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
                     :compiler
                     {:main "db_devops.app"
                      :asset-path "/js/out"
                      :output-to "target/cljsbuild/public/js/app.js"
                      :output-dir "target/cljsbuild/public/js/out"
                      :source-map true
                      :optimizations :none
                      :pretty-print true}}}}



                  :doo {:build "test"}
                  :source-paths ["env/dev/clj" "test/clj"]
                  :resource-paths ["env/dev/resources"]
                  :repl-options {:init-ns user}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]}
   :project/test {:resource-paths ["env/dev/resources" "env/test/resources"]
                  :cljsbuild
                  {:builds
                   {:test
                    {:source-paths ["src/cljc" "src/cljs" "test/cljs"]
                     :compiler
                     {:output-to "target/test.js"
                      :main "db_devops.doo-runner"
                      :optimizations :whitespace
                      :pretty-print true}}}}

                  }
   :profiles/dev {}
   :profiles/test {}})
