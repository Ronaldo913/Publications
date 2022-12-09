const express = require("express");
const router = express.Router();
const publicationsController = require("../controllers/publicationsController");

router.get("/", publicationsController.list);
router.get("/show/:publicationId/", publicationsController.show);
router.get("/create/", publicationsController.create);
router.post("/create/", publicationsController.create);
router.post("/:publicationId/update", publicationsController.update);
router.get("/:publicationId/update", publicationsController.update);
router.get("/:publicationId/delete", publicationsController.delete);

module.exports = router;