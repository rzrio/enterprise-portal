<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use \frontend\modules\user\models\LoginForm;
/* @var $this \yii\web\View */
/* @var $content string */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */

$model = new LoginForm();


\frontend\assets\FrontendAsset::register($this);
?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?php echo Yii::$app->language ?>">
<head>
    <meta charset="<?php echo Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <?php echo Html::csrfMetaTags() ?>
</head>
<body>
<?php $this->beginBody() ?>
<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel=stylesheet type=text/css>
<link href=http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css rel=stylesheet type=text/css>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r72/three.min.js"></script>
        <?php if(Yii::$app->session->hasFlash('alert')):?>
            <?php echo \yii\bootstrap\Alert::widget([
                'body'=>ArrayHelper::getValue(Yii::$app->session->getFlash('alert'), 'body'),
                'options'=>ArrayHelper::getValue(Yii::$app->session->getFlash('alert'), 'options'),
            ])?>
        <?php endif; ?>
        <?php echo $content ?>
<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>