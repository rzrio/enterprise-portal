<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "lead".
 *
 * @property integer $id
 * @property string $company
 * @property string $company_url
 * @property string $name
 * @property string $title
 * @property string $contacts
 * @property string $company_description
 * @property string $person_biography
 * @property integer $budget_tier
 * @property integer $budget_mandated
 * @property integer $budget_maintenance
 * @property integer $budget_innovation
 * @property integer $budget_growth
 * @property string $investment_priorities
 * @property string $platforms
 * @property string $cost_reduction_areas
 * @property string $endpoints
 * @property string $picture
 */
class Lead extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'lead';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['company', 'name', 'title', 'cost_reduction_areas', 'endpoints', 'picture'], 'required'],
            [['contacts', 'company_description', 'person_biography', 'investment_priorities', 'platforms', 'cost_reduction_areas', 'endpoints'], 'string'],
            [['budget_tier', 'budget_mandated', 'budget_maintenance', 'budget_innovation', 'budget_growth'], 'integer'],
            [['company', 'company_url', 'name', 'title', 'picture'], 'string', 'max' => 50]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'company' => 'Company',
            'company_url' => 'Company Url',
            'name' => 'Name',
            'title' => 'Title',
            'contacts' => 'Contacts',
            'company_description' => 'Company Description',
            'person_biography' => 'Person Biography',
            'budget_tier' => 'Budget Tier',
            'budget_mandated' => 'Budget Mandated',
            'budget_maintenance' => 'Budget Maintenance',
            'budget_innovation' => 'Budget Innovation',
            'budget_growth' => 'Budget Growth',
            'investment_priorities' => 'Investment Priorities',
            'platforms' => 'Platforms',
            'cost_reduction_areas' => 'Cost Reduction Areas',
            'endpoints' => 'Endpoints',
            'picture' => 'Picture',
        ];
    }

    /**
     * @inheritdoc
     * @return LeadQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new LeadQuery(get_called_class());
    }
}
