<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\BudgetTier */

$this->title = 'Create Budget Tier';
$this->params['breadcrumbs'][] = ['label' => 'Budget Tiers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="budget-tier-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
