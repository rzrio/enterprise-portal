<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */
$this->title = "rzr.io"
?>


<?php if(Yii::$app->user->isGuest): ?>
    <div class=current-info>

        <?php $form = ActiveForm::begin(['id' => 'login-form', 'class' => 'form']); ?>


        <span class=settings-name><?php echo $form->field($model, 'identity') ?></span>
                                    <span
                                        class=settings-name><?php echo $form->field($model, 'password')->passwordInput() ?></span>
                                    <span
                                        class=settings-name><?php echo Html::submitButton(Yii::t('frontend', 'Login'), ['id' => 'login-button', 'name' => 'login-button', 'class' => 'button button-load load-video', 'data-model' => '1']) ?></span>
        <?php ActiveForm::end(); ?>

    </div>


<?php else : ?>
    <div class="current-info">

        <h2> Welcome <?= Yii::$app->user->identity->username ?>, you're already logged in.</h2>

    </div>


<?php endif; ?>



