SRC_DIR := lib
DIST_DIR := dist
TEST_DIR := test
NODE_BIN := ./node_modules/.bin
EXPORTED_FILE := <%= projModuleName %>

build: clean
	$(NODE_BIN)/browserify $(SRC_DIR)/* -s <%= projNameSpace %> | $(NODE_BIN)/uglifyjs > $(DIST_DIR)/$(EXPORTED_FILE).js
.PHONY: build

test:
	npm test
.PHONY: test

clean:
	rm -rf $(DIST_DIR)
	mkdir $(DIST_DIR)
.PHONY: clean
