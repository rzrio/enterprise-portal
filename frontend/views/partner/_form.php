<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Partner */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="partner-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'user_creator')->textInput() ?>

    <?= $form->field($model, 'url')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'address')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'partnership_date')->textInput() ?>

    <?= $form->field($model, 'ndafile')->fileInput(); ?>

    <?= $form->field($model, 'nda')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'msafile')->fileInput(); ?>
    <?= $form->field($model, 'msa')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'agreementfile')->fileInput(); ?>
    <?= $form->field($model, 'agreement')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'tier')->textInput() ?>

    <?= $form->field($model, 'tags')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'categories')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
