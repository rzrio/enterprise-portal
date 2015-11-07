<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\bootstrap\NavBar;
use yii\bootstrap\Nav;
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
<div class="wrap">
    <?php
    NavBar::begin([
        'brandLabel' => 'RZR.IO',
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar-inverse navbar-fixed-top',
        ],
    ]); ?>
    <?php echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right'],
        'items' => [
            ['label' => Yii::t('frontend', 'Home'), 'url' => ['/site/index']],
            ['label' => Yii::t('frontend', 'About'), 'url' => ['/page/view', 'slug'=>'about']],
            ['label' => Yii::t('frontend', 'Articles'), 'url' => ['/article/index']],
            ['label' => Yii::t('frontend', 'Contact'), 'url' => ['/site/contact']],
            ['label' => Yii::t('frontend', 'Signup'), 'url' => ['/user/sign-in/signup'], 'visible'=>Yii::$app->user->isGuest],
            ['label' => Yii::t('frontend', 'Login'), 'url' => ['/user/sign-in/login'], 'visible'=>Yii::$app->user->isGuest],
            [
                'label' => Yii::$app->user->isGuest ? '' : Yii::$app->user->identity->getPublicIdentity(),
                'visible'=>!Yii::$app->user->isGuest,
                'items'=>[
                    [
                        'label' => Yii::t('frontend', 'Settings'),
                        'url' => ['/user/default/index']
                    ],
                    [
                        'label' => Yii::t('frontend', 'Backend'),
                        'url' => Yii::getAlias('@backendUrl'),
                        'visible'=>Yii::$app->user->can('manager')
                    ],
                    [
                        'label' => Yii::t('frontend', 'Logout'),
                        'url' => ['/user/sign-in/logout'],
                        'linkOptions' => ['data-method' => 'post']
                    ]
                ]
            ],
            [
                'label'=>Yii::t('frontend', 'Language'),
                'items'=>array_map(function ($code) {
                    return [
                        'label' => Yii::$app->params['availableLocales'][$code],
                        'url' => ['/site/set-locale', 'locale'=>$code],
                        'active' => Yii::$app->language === $code
                    ];
                }, array_keys(Yii::$app->params['availableLocales']))
            ]
        ]
    ]); ?>
    <?php NavBar::end(); ?>

    <?php echo $content ?>

</div>

<!-- End Attracta Include 2015-06-19 20:56 -->
<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>
