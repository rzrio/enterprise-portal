<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\PartnerSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="partner-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'name') ?>

    <?= $form->field($model, 'description') ?>

    <?= $form->field($model, 'user_creator') ?>

    <?= $form->field($model, 'url') ?>

    <?php // echo $form->field($model, 'address') ?>

    <?php // echo $form->field($model, 'partnership_date') ?>

    <?php // echo $form->field($model, 'nda') ?>

    <?php // echo $form->field($model, 'msa') ?>

    <?php // echo $form->field($model, 'agreement') ?>

    <?php // echo $form->field($model, 'tier') ?>

    <?php // echo $form->field($model, 'tags') ?>

    <?php // echo $form->field($model, 'categories') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
