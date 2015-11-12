<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\LeadSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="lead-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'company') ?>

    <?= $form->field($model, 'company_url') ?>

    <?= $form->field($model, 'name') ?>

    <?= $form->field($model, 'title') ?>

    <?php // echo $form->field($model, 'contacts') ?>

    <?php // echo $form->field($model, 'company_description') ?>

    <?php // echo $form->field($model, 'person_biography') ?>

    <?php // echo $form->field($model, 'budget_tier') ?>

    <?php // echo $form->field($model, 'budget_mandated') ?>

    <?php // echo $form->field($model, 'budget_maintenance') ?>

    <?php // echo $form->field($model, 'budget_innovation') ?>

    <?php // echo $form->field($model, 'budget_growth') ?>

    <?php // echo $form->field($model, 'investment_priorities') ?>

    <?php // echo $form->field($model, 'platforms') ?>

    <?php // echo $form->field($model, 'cost_reduction_areas') ?>

    <?php // echo $form->field($model, 'endpoints') ?>

    <?php // echo $form->field($model, 'picture') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
