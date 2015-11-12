<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\LeadSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Leads';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="lead-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Lead', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'company',
            'company_url:url',
            'name',
            'title',
            // 'contacts:ntext',
            // 'company_description:ntext',
            // 'person_biography:ntext',
            // 'budget_tier',
            // 'budget_mandated',
            // 'budget_maintenance',
            // 'budget_innovation',
            // 'budget_growth',
            // 'investment_priorities:ntext',
            // 'platforms:ntext',
            // 'cost_reduction_areas:ntext',
            // 'endpoints:ntext',
            // 'picture',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>

</div>
