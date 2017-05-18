(ns luminus-re-frame-app-template.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [luminus-re-frame-app-template.core-test]))

(doo-tests 'luminus-re-frame-app-template.core-test)

