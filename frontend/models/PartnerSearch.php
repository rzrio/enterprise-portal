<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Partner;

/**
 * PartnerSearch represents the model behind the search form about `app\models\Partner`.
 */
class PartnerSearch extends Partner
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'user_creator', 'tier'], 'integer'],
            [['name', 'description', 'url', 'address', 'partnership_date', 'nda', 'msa', 'agreement', 'tags', 'categories'], 'safe'],
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
        $query = Partner::find();

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
            'user_creator' => $this->user_creator,
            'partnership_date' => $this->partnership_date,
            'tier' => $this->tier,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'description', $this->description])
            ->andFilterWhere(['like', 'url', $this->url])
            ->andFilterWhere(['like', 'address', $this->address])
            ->andFilterWhere(['like', 'nda', $this->nda])
            ->andFilterWhere(['like', 'msa', $this->msa])
            ->andFilterWhere(['like', 'agreement', $this->agreement])
            ->andFilterWhere(['like', 'tags', $this->tags])
            ->andFilterWhere(['like', 'categories', $this->categories]);

        return $dataProvider;
    }
}
