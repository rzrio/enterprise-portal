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

<div id=bodyWrapper class=body-wrapper>
      <nav id=menu class="menu">
        <ul>
            <li id=creditsAnchor><span>Credits</span></li>
            <li id=contactAnchor><span>Contact</span></li>
            <li id=aboutAnchor><span>About</span></li>
            <li id=galleryAnchor><span>Portfolio</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li id=homeAnchor class=active><span><b>RZR</b>.IO</span></li>
        </ul>
        <div id=menuItemActive class=item-active-bottom>
            <div class="menu-handler left"></div>
            <!--div class="menu-handler right"></div--></div>
    </nav>
    <!-- burguer menu and fullscreen nav -->
    <div id=burguerMenu class="burguer-container hide">
        <div id=burguerTitle class=burguer-title>::Home</div>
        <a id=trigger-overlay class=burger href=#><span></span></a></div>
    <div class=burguer-overlay>
        <nav>
            <ul>
                <li><a id=aboutBurguerItem href=#>About</a></li>
                <li><a id=galleryBurguerItem href=#>Portfolio</a></li>
                <li><a id=contactBurguerItem href=#>Contact</a></li>
                <li><a id=creditsBurguerItem href=#>Credits</a></li>
            </ul>
        </nav>
    </div>
</div>

    <?php echo $content ?>



<!-- End Attracta Include 2015-06-19 20:56 -->
<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>
