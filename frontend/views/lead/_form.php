<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Lead */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="lead-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'company')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'company_url')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'contacts')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'company_description')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'person_biography')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'budget_tier')->textInput() ?>

    <?= $form->field($model, 'budget_mandated')->textInput() ?>

    <?= $form->field($model, 'budget_maintenance')->textInput() ?>

    <?= $form->field($model, 'budget_innovation')->textInput() ?>

    <?= $form->field($model, 'budget_growth')->textInput() ?>

    <?= $form->field($model, 'investment_priorities')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'platforms')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'cost_reduction_areas')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'endpoints')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'picture')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
