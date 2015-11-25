<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */

$this->title = Yii::t('frontend', 'Login');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-login">
    <h1><?php echo Html::encode($this->title) ?></h1>


        <div class="container" style="position: absolute; width: 20%; bottom: 10px; left: 10px;">
            <?php $form = ActiveForm::begin(['id' => 'login-form','class' => 'form']); ?>
            <?php echo $form->field($model, 'identity') ?>
            <?php echo $form->field($model, 'password')->passwordInput() ?>
            <div class="form-group">
                <?php echo Html::submitButton(Yii::t('frontend', 'Login'), ['id' => 'login-button', 'name' => 'login-button']) ?>
            </div>
            <?php ActiveForm::end(); ?>

        </div>


    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script src="js/index.js"></script>






</div>
