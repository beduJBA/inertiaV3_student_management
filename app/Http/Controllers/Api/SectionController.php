<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ListSectionsRequest;
use App\Models\Section;
use App\Http\Resources\SectionResource;

class SectionController extends Controller
{
    public function __invoke(ListSectionsRequest $request)
    {
        $sections = Section::query()
            ->where('class_id', $request->integer('class_id'))
            ->get();

        return SectionResource::collection($sections);
    }
}

