<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use \frontend\modules\user\models\LoginForm;
/* @var $this \yii\web\View */
/* @var $content string */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */

$model = new LoginForm();

?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?php echo Yii::$app->language ?>">
<head>
    <meta charset="<?php echo Yii::$app->charset ?>"/>
    <title><?php echo Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <?php echo Html::csrfMetaTags() ?>
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/splashstyle.css">
</head>
<body>
<?php $this->beginBody() ?>
        <?php echo $content ?>
<?php $this->endBody() ?>
<script src="/js/splashindex.js"></script>

</body>
</html>
<?php $this->endPage() ?>