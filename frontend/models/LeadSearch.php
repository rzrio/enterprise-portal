<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Lead;

/**
 * LeadSearch represents the model behind the search form about `app\models\Lead`.
 */
class LeadSearch extends Lead
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'budget_tier', 'budget_mandated', 'budget_maintenance', 'budget_innovation', 'budget_growth'], 'integer'],
            [['company', 'company_url', 'name', 'title', 'contacts', 'company_description', 'person_biography', 'investment_priorities', 'platforms', 'cost_reduction_areas', 'endpoints', 'picture'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Lead::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'budget_tier' => $this->budget_tier,
            'budget_mandated' => $this->budget_mandated,
            'budget_maintenance' => $this->budget_maintenance,
            'budget_innovation' => $this->budget_innovation,
            'budget_growth' => $this->budget_growth,
        ]);

        $query->andFilterWhere(['like', 'company', $this->company])
            ->andFilterWhere(['like', 'company_url', $this->company_url])
            ->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'title', $this->title])
            ->andFilterWhere(['like', 'contacts', $this->contacts])
            ->andFilterWhere(['like', 'company_description', $this->company_description])
            ->andFilterWhere(['like', 'person_biography', $this->person_biography])
            ->andFilterWhere(['like', 'investment_priorities', $this->investment_priorities])
            ->andFilterWhere(['like', 'platforms', $this->platforms])
            ->andFilterWhere(['like', 'cost_reduction_areas', $this->cost_reduction_areas])
            ->andFilterWhere(['like', 'endpoints', $this->endpoints])
            ->andFilterWhere(['like', 'picture', $this->picture]);

        return $dataProvider;
    }
}
