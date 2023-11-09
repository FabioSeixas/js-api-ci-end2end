const { Router } = require('express');
// const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

const ContactController = require('./app/controllers/ContactController');

router.get('/contacts', ContactController.index);
// router.get('/contacts/:id', ContactController.show);
router.post('/contacts/', ContactController.store);
// router.put('/contacts/:id', ContactController.update);
// router.delete('/contacts/:id', ContactController.delete);

// router.get('/categories', CategoryController.index);
// router.get('/categories/:id', CategoryController.show);
// router.post('/categories', CategoryController.store);
// router.put('/categories/:id', CategoryController.update);
// router.delete('/categories/:id', CategoryController.delete);

module.exports = router;
