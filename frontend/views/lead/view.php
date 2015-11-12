<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Lead */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Leads', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="lead-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'company',
            'company_url:url',
            'name',
            'title',
            'contacts:ntext',
            'company_description:ntext',
            'person_biography:ntext',
            'budget_tier',
            'budget_mandated',
            'budget_maintenance',
            'budget_innovation',
            'budget_growth',
            'investment_priorities:ntext',
            'platforms:ntext',
            'cost_reduction_areas:ntext',
            'endpoints:ntext',
            'picture',
        ],
    ]) ?>

</div>
