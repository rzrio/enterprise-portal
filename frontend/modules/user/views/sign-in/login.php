<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */
/* @var $model \frontend\modules\user\models\LoginForm */

$this->title = Yii::t('frontend', 'Login');
$this->params['breadcrumbs'][] = $this->title;
?>


<div style="position: relative;">
<canvas id='canv'></canvas>


        <div class="container" style="position: absolute; width: 20%; bottom: 10px; left: 10px;">

            <style>

                .form{
                    float:left;
                    width:100%;
                    box-sizing:border-box;
                    padding:40px;
                }

                .textbox{
                    height:50px;
                    width:100%;
                    border-radius:3px;
                    border:rgba(0,0,0,.3) 2px solid;
                    box-sizing:border-box;
                    padding:10px;
                    margin-bottom:30px;
                }

                .textbox:focus{
                    outline:none;
                    border:rgba(24,149,215,1) 2px solid;
                    color:rgba(24,149,215,1);
                }

                .login-button{
                    height:50px;
                    width:100%;
                    border-radius:3px;
                    border:rgba(0,0,0,.3) 0px solid;
                    box-sizing:border-box;
                    padding:10px;
                    margin-bottom:30px;
                    background:#90c843;
                    color:#FFF;
                    font-weight:bold;
                    font-size: 12pt;
                    transition:background .4s;
                    cursor:pointer;
                }

                .login-button:hover{
                    background:#80b438;

                }

            </style>
            <?php $form = ActiveForm::begin(['id' => 'login-form','class' => 'form']); ?>
            <?php echo $form->field($model, 'identity', ['class' => 'textbox']) ?>
            <?php echo $form->field($model, 'password', ['class' => 'textbox'])->passwordInput() ?>
            <div class="form-group">
                <?php echo Html::submitButton(Yii::t('frontend', 'Login'), ['class' => 'login-button', 'name' => 'login-button']) ?>
            </div>
            <?php ActiveForm::end(); ?>

        </div>
</div>







